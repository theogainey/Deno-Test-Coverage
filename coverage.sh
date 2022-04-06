#!/usr/bin/bash
rm -fr /cov_profile/
deno test --coverage=cov_profile
deno coverage cov_profile --lcov > cov_profile/cov_profile.lcov
genhtml -o cov_profile/html cov_profile/cov_profile.lcov
open cov_profile/html/index.html
