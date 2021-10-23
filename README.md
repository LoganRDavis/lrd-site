# Logan R Davis
My personal website.
https://www.loganrdavis.com/

## Uploading
```
gsutil -m rsync -x '.git.*|.vscode.*|README.md|colors.txt' -d -r ./ gs://www.loganrdavis.com
```
