#!/usr/bin/env bash

# function that verifies a given array of env vars are set (non-empty) otherwise exits with error
#
# usage:
# REQUIRED_VARS=("DB_HOST" "DB_USER" "DB_PASSWORD" "DB_NAME")
# verify_env "${REQUIRED_VARS[@]}"
verify_env() {
  missing_vars=()

  for var in "$@"; do
    if [ -z "${!var}" ]; then
      missing_vars+=("$var")
    fi
  done

  if [ ${#missing_vars[@]} -ne 0 ]; then
    >&2 echo "Error: The following environment variables are missing or empty: ${missing_vars[*]}"
    exit 1
  fi
}

# function that checks if a given value is contained within a given bash array
#
# usage:
# contains "$value" "${array[@]}"
array_contains() {
  local value="$1"
  shift
  for item; do
    [[ "$item" == "$value" ]] && return 0
  done
  return 1
}
