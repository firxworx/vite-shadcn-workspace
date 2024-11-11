#!/usr/bin/env bash

set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib/common.sh"

APP_CLIENT_PATH="apps/client"
PKG_REACT_UI_PATH="packages/react-ui"

UI_PKG_SRC_PATH="$PKG_REACT_UI_PATH/src"

echo "Set up project workspace..."

echo "Setting work directory to: $GIT_REPO_ROOT"
cd "$GIT_REPO_ROOT"

echo "Reset workspace..."
pnpm reset

if [ ! -f "$APP_CLIENT_PATH/.env" ]; then
  echo "Copying '$APP_CLIENT_PATH/.env.example' to '$APP_CLIENT_PATH/.env'..."
  cp "$APP_CLIENT_PATH/.env.example" "$APP_CLIENT_PATH/.env"
fi

if [ ! -f "$GIT_REPO_ROOT/.env" ]; then
  echo "Copying '$GIT_REPO_ROOT/.env.example' to '$GIT_REPO_ROOT/.env'..."
  cp "$GIT_REPO_ROOT/.env.example" "$GIT_REPO_ROOT/.env"
fi

echo "Installing workspace dependencies..."
pnpm install

echo "Running build..."
pnpm build

echo "Creating react-ui directories..."
mkdir -p "$UI_PKG_SRC_PATH/app"
mkdir -p "$UI_PKG_SRC_PATH/components"
mkdir -p "$UI_PKG_SRC_PATH/hooks"
mkdir -p "$UI_PKG_SRC_PATH/lib"
mkdir -p "$UI_PKG_SRC_PATH/variants"
mkdir -p "$UI_PKG_SRC_PATH/components/assets"
mkdir -p "$UI_PKG_SRC_PATH/components/compositions"
mkdir -p "$UI_PKG_SRC_PATH/components/display"
mkdir -p "$UI_PKG_SRC_PATH/components/features"
mkdir -p "$UI_PKG_SRC_PATH/components/icons"
mkdir -p "$UI_PKG_SRC_PATH/components/landing"
mkdir -p "$UI_PKG_SRC_PATH/components/layout"
mkdir -p "$UI_PKG_SRC_PATH/components/ui"
