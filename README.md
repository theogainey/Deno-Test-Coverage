# Deno Test Coverage

shell script to collect test coverage when testing with Deno's built-in test
runner

## Usage

code coverage report is generated with a utility called genhtml that comes
bundled with lcov. lcov can be installed with Homebrew on macOS.

```
brew install lcov
```

### Deno

Deno is capable of spawning a subprocess and supports url imports. As a result,
a code coverage report can be generated via the command line. There is no need
to install any dependencies, just open a command line where you would normally
run `deno test` and use the following code.

```
deno run --allow-run --allow-read --allow-write https://raw.githubusercontent.com/theogainey/Deno-Test-Coverage/main/coverage.ts
```

or

```
deno run --allow-all https://raw.githubusercontent.com/theogainey/Deno-Test-Coverage/main/coverage.ts
```

Additionally pass `open` as an argument to open the coverage report

```
deno run --allow-all https://raw.githubusercontent.com/theogainey/Deno-Test-Coverage/main/coverage.ts open
```

### Bash

To run this script with Bash first copy the contents of coverage.sh to a project
or this script can also added to a project via a command line

```
curl -sL https://raw.githubusercontent.com/theogainey/Deno-Test-Coverage/main/coverage.sh -o coverage.sh
```

after adding the script to a project a test coverage report can generated with

```
sh coverage.sh
```
