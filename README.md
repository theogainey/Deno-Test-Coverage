# Deno Test Coverage

shell script to collect test coverage when testing with Deno's built-in test
runner

## Usage

code coverage report is generated with a utility called genhtml that comes
bundled with lcov. lcov can be installed with Homebrew on macOS.

```
brew install lcov
```

to use this script first copy the contents of coverage.sh to a project or this
script can also added to a project via a command line

```
curl -sL https://raw.githubusercontent.com/theogainey/Deno-Test-Coverage/main/coverage.sh -o coverage.sh
```

Next be sure to the script is executable

```
chmod +x coverage.sh
```

after adding the executable script to a project a test coverage report can
generated with

```
sh coverage.sh
```
