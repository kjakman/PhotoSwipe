#!/bin/bash
set -e

grunt vpatina
scp dist/vp* kjetil@chacha:/web/comps/php/apt-dev/js/vp/
scp dist/default-skin/default-skin.css kjetil@chacha:/web/comps/php/apt-dev/js/vp/default-skin/

if [ $# -eq 1 ] ; then
 git commit -a -m "$1" && git push
fi

