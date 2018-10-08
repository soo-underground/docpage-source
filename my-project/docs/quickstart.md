# Quickstart

This step-by-step guide will help you to get your documentation project up and running.

## Just MkDocs

1. Install python 3.
2. Install MkDocs engine (pip install mkdocs).
3. Create a .md text file and write something there.
4. Create mkdocs.yml file with just a link to your .md file.
5. Run mkdocs serve command from your projects directory.
6. Visit http://127.0.0.1:8000 page to look at you webpage.
7. Visit site directory - now it should have an html files. Copy them to any hosting of your choosing - GithubPages, S3 or any other.
8. Visit an url of that hosting and view your website.
  >:warning: this step may take a while!

9. Hurray! You're awesome!

<!--
## Autobuilds
Now, since you've started making changes to your website, you may have noticed that it takes some effort to update your webpage. You have to build it locally, go to site folder and commit build artifacts. There are several ways to make your life easier:

* Commit artifacts directly to your hosting website. It's quite easy, especially for Github - you change you project setting to put build artifacts directly to Github*Pages* repo. After that - just stage, commit and push your changes. Still takes a while, but certanly easier that moving artifacts by hand.
* Put your building and pushing somewhere else, let's say Amazon CodeBuild. It allows you to do everything in the cloud and starts with just a commit to your source repo! But be aware - CodeBuild offers limited build time for free. Exceed that limit, and Jeff will come for you and your hard-earned money! After all, you have to provide your credit card info upon registering AWS account.
* Put your building and pushing somewhere else, but actually for free. You can use heroku for that.

## Autotests

--/>
