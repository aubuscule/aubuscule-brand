#!/bin/sh
# Stage ds-bundle/ from the repo for upload to claude.ai/design.
set -e
cd "$(dirname "$0")/.."
rm -rf ds-bundle
mkdir -p ds-bundle
cp -r tokens components guidelines ds-bundle/
# README = conventions header + repo README
cat .design-sync/conventions.md > ds-bundle/README.md
printf '\n\n---\n\n' >> ds-bundle/README.md
cat README.md >> ds-bundle/README.md
# styles.css: repo version plus component classes in the import closure
awk '{print} /tokens\/spacing.css/ && !d {print "@import \"./components/components.css\";"; d=1}' styles.css > ds-bundle/styles.css
echo '{"by":"design-sync-cli"}' > ds-bundle/_ds_needs_recompile
