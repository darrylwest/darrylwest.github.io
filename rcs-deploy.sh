#!/usr/bin/env bash
# dpw@Darryls-iMac.localdomain
# 2021.11.27
#

set -eu

if [ -d .git ]
then
  rsync -av raincitysoftware.com dpw@raincitysoftware.com:
else
  printf "ERROR! run this script from the top of the repo, not `pwd`...\n\n"
fi
