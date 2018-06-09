#!/bin/bash
set -e

grunt vpatina
scp dist/vp* gallery@gallery:/web/sites/test.vpatina.com/www/afr/js/vp/
scp dist/default-skin/default-skin.css gallery@gallery:/web/sites/test.vpatina.com/www/afr/js/vp/default-skin/

if [ $# -eq 1 ] ; then
 git commit -a -m "$1" && git push
fi

