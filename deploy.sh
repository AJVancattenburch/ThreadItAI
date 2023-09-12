#!/bin/bash
pm2 stop threadit_ai
rm -rf threadit_ai
mkdir -p ~/threadit_ai/server
echo "OPENAI_API_KEY=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" | tee ~/threadit_ai/server/.env
chmod 600 ~/threadit_ai/server/.env