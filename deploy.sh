#!/usr/bin/env bash
# dpw@Darryls-iMac.localdomain
# 2021.05.17
#

set -eu

git pull && git co master && git pull && git merge develop && git push && git co develop
