#!/bin/bash
set -e

if [ $# -lt 1 ] ; then
echo -e "Wrong number of parameters."
echo -e "Usage:"
echo -e "push [message]\n"
exit 1
fi

grunt vpatina
git commit -a -m "$1" && git push
