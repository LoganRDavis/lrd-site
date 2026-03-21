serve:
	python3 -m http.server 8000

deploy:
	gsutil -m rsync -x '.git.*|.vscode.*|.claude.*|README.md|CLAUDE.md|Makefile|colors.txt' -d -r ./ gs://www.loganrdavis.com
