#!/bin/bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"