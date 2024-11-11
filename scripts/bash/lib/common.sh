#!/usr/bin/env bash

set -euo pipefail

# perhaps IFS is best set on a case-by-case basis to not break array functions...
# so take care when processing filenames that may contain spaces...
# IFS=$'\n\t'

# debug: add `set -x` to print every command executed by the script

GIT_REPO_ROOT="$(git rev-parse --show-toplevel)"

# relative directories
SCRIPTS_LIB_DIR="$(dirname "${BASH_SOURCE[0]}")"
SCRIPTS_DIR="$(dirname "$SCRIPTS_LIB_DIR")"

# set the AWS_PROFILE to default if it is not set
DEFAULT_AWS_PROFILE="default"
AWS_PROFILE="${AWS_PROFILE:-$DEFAULT_AWS_PROFILE}"

# load the .env file in the root of the git repo (`set -a` is equivalent to `set -o allexport`)
if [ -f "$GIT_REPO_ROOT/.env" ]; then
  set -o allexport
  source "$GIT_REPO_ROOT/.env"
  set +o allexport
fi
