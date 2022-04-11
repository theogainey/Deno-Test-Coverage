import {
  readableStreamFromReader,
  writableStreamFromWriter,
} from 'https://deno.land/std@0.134.0/streams/conversion.ts';
import { mergeReadableStreams } from 'https://deno.land/std@0.134.0/streams/merge.ts';

const removeCommand = ['rm', ' -fr', '/cov_profile/'];
const testCommand = ['deno', 'test', '--coverage=cov_profile'];
const genHTMLCommand = [
  'genhtml',
  '-o',
  'cov_profile/html',
  'cov_profile/cov_profile.lcov',
];
const openReportCommand = ['open', 'cov_profile/html/index.html'];

const remove = Deno.run({ cmd: removeCommand });
await remove.status();
const test = Deno.run({ cmd: testCommand });
await test.status();

// create cov_profile.lcov
const lcov = await Deno.open('cov_profile/cov_profile.lcov', {
  read: true,
  write: true,
  create: true,
});
const fileWriter = await writableStreamFromWriter(lcov);

// start the process
const writeLcov = Deno.run({
  cmd: ['deno', 'coverage', 'cov_profile', '--lcov'],
  stdout: 'piped',
  stderr: 'piped',
});

const stdout = readableStreamFromReader(writeLcov.stdout);
const stderr = readableStreamFromReader(writeLcov.stderr);
const joined = mergeReadableStreams(stdout, stderr);
// returns a promise that resolves when the process is killed/closed
joined.pipeTo(fileWriter).then(() => console.log('pipe join done'));

// manually stop process "writeLcov" will never end on its own
setTimeout(async () => {
  await writeLcov.kill('SIGINT');
}, 1000);

const genHTML = Deno.run({ cmd: genHTMLCommand });
await genHTML.status();

if (Deno.args.includes('open')) {
  const open = Deno.run({ cmd: openReportCommand });
  await open.status();
}
