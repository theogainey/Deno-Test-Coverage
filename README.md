# Simple Coverage

Collect test coverage with Deno's built-in test runner and lcov

## Usage

code coverage report is generated with a utility called genhtml that comes
bundled with lcov. lcov can be installed with Homebrew on macOS.

```
brew install lcov
```

### Deno Subprocess

Deno is capable of spawning a subprocess and supports url imports. As a result,
a code coverage report can be generated via the command line. There is no need
to install any dependencies, just open a command line where you would normally
run `deno test` and use the following code.

```
deno run --allow-run --allow-read --allow-write https://deno.land/x/simple_coverage@v1.0.2/coverage.ts
```

or

```
deno run --allow-all https://deno.land/x/simple_coverage@v1.0.2/coverage.ts
```

Additionally pass `open` as an argument to open the coverage report

```
deno run --allow-all https://deno.land/x/simple_coverage@v1.0.2/coverage.ts open
```

### Bash

Alternativly you can acheive the same results by using the provided Bash script. First copy the contents of coverage.sh to a project
or this script can also added to a project via a command line

```
curl -sL https://deno.land/x/simple_coverage@v1.0.2/coverage.sh -o coverage.sh
```

after adding the script to a project a test coverage report can generated with

```
sh coverage.sh
```
