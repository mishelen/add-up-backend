#!/bin/bash
if ! curl -Is http://localhost:3000/health-status | head -n 1 | grep 200
then
  echo "Addup backend is running Successully"
else
  echo "Addup backend isn't running"
fi
