
<h1 align="center">
  <img src="https://user-images.githubusercontent.com/35951221/126972786-cd5bc34d-a014-49e5-ac44-616b3169875f.png" width="320px"/>
  <br/>
  <span>Official Website Repository</span>
</h1>
<p align="center">
  Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.
</p>

<p align="center">
  <img src="https://img.shields.io/github/commit-activity/y/maddevsio/maddevs?color=%23F01716&label=COMMITS&style=for-the-badge" alt="Commits activity">
  <img src="https://img.shields.io/website?down_color=%23F01716&down_message=DOWN&label=Status&style=for-the-badge&up_color=%42ba96&up_message=UP&url=https%3A%2F%2Fmaddevs.io" alt="Website status">
  <img src="https://img.shields.io/github/languages/top/maddevsio/maddevs?color=%23f0db4f&style=for-the-badge" alt="Javascript">
  <img src="https://img.shields.io/github/package-json/dependency-version/maddevsio/maddevs/nuxt?color=%2341b883&style=for-the-badge" alt="Nuxt">
</p>

## 🌎 Table of content
* [Quick start](#%EF%B8%8F-quick-development-start)
* [Project overview](#%EF%B8%8F-project-overview)
* [Environment variables](#%EF%B8%8F-environment-variables)
* [Deploy](#-deploy)
* [Testing](#-testing)
* [Linting](#-linting)
* [Snyk](#-snyk)
* [AWS S3](#-aws-s3)
* [Feature Flags](#%EF%B8%8F-feature-flags)
* [SEO-Analyzer](#-seo-analyzer)
* [Radiator](#-radiator)
* [Additional docs](#-additional-docs)

## ⚡️ Quick development start
To start the project you need to do the following steps:

1. Install dependencies
 ``` bash
$ npm install
```
2. Run the project in development mode
``` bash
$ npm run dev
```
3. The application is available on [localhost:3000](https://localhost:3000)

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## ⚙️ Project overview

### Technologies && tools

#### Main technologies

A list of main technologies that we use for build our application

| Technology  	| Version	| Description |
|---	|---	|--- |
| Vue  	     | ^2.15.4 	 | Progressive framework for building a modern user interfaces |
| Nuxt  	   | ^2.15.4   | Server-side rendering framework for VueJS |
| Axios  	   | ^0.21.1   | Promise based HTTP client for the browser and node.js |
| Express  	 | ^4.17.1   | Web-framework for nodeJS |
| Vuelidate  | ^0.7.6    | A VueJS modern validating library |
| Prismic    | ^1.2.6    | Content-Management system |
| Lottie     | ^0.2.1    | Lightweight, scalable animations |

#### Additional tools

A list of additional tools that we use for make our codebase better

| Technology  	| Version	| Description |
|---	|---	|--- |
| Jest  	          | ^26.6.3  | Delightful JavaScript Testing Framework with a focus on simplicity. |
| ESLint  	        | ^7.24.0  | Pluggable JavaScript linter |
| testing-library  	| ^5.6.1   | Simple and complete testing utilities that encourage good testing practices |
| Cypress  	        | ^7.4.0   | E2E testing framework on JavaScript |
| Sentry            | ^6.3.1   | Application monitoring and error tracking |
| Snyk              | n/a      | Tool for find and fix security vulnerabilities |

### Project structure

```
.
├── README.md
├── Procfile - heroku config file
├── package-lock.json
├── package.json
├── nuxt.config.js - nuxt config
├── nodemon.json - nodemon config
├── jsconfig.json
├── Dockerfile
├── cypress.json - cypress config
├── babel.config.js - babel config
├── .snyk - snyk policy file
├── .sass-lint.yml - sass-lint config
├── .gitignore
├── .eslintrc - eslint config
├── .eslintignore
├── .env.example
├── .editorconfig
├── .dockerignore
├── utils - core utils
├── tests - all unit-tests
├── server - server code
├── SEOAnalyzer - app for analytze SEO errors
├── jest - jest configurations
├── docs - additional docs
├── cypress - cypress tests folder
├── client - main source folder
│   ├── api - api requests
│   ├── app - ?
│   ├── assets
│   ├── components
│   ├── data - static data
│   ├── directives
│   ├── featureFlags - featureFlags logic
│   ├── helpers
│   ├── layouts
│   ├── mixins
│   ├── pages
│   ├── plugins
│   ├── static
│   ├── store - vuex
```

## 💼️ Environment variables

A list of environment variables that needed to start the project(required)

| NAME  	                                | DESCRIPTION  	|
|---	                                    |---	|
| NODE_SENDPULSE_API_USER_ID  	          | Sendpulse api user id  	  	          	          	  |
| NODE_SENDPULSE_API_KEY  	              | Sendpulse api key  	  	          	          	      |
| NODE_EMAIL_HR  	                        | Email to send messages(cv) to HR department  	        |
| NODE_EMAIL_CONTACT  	                  | Email to send messages(from leads) to DM department  	|
| NODE_PRISMIC_API  	                    | Prismic api key  	                                    |
| NODE_ATLASSIAN_TOKEN   	                | Jira auth token  	  	          	          	        |
| NODE_ATLASSIAN_EMAIL  	                | Jira auth email  	  	          	          	        |
| NODE_ATLASSIAN_PROJECT_KEY  	          | Jira auth project key  	  	          	          	  |
| NODE_ATLASSIAN_API_URL  	              | Jira api url  	  	          	          	          |
| NODE_JEST_COVERAGE_SLACK_WEBHOOK_URL  	| Slack webhook to send coverage  	  	          	    |
| NODE_PAGESPEED_SLACK_WEBHOOK_URL  	    | Slack webhook to send pagespeed info  	  	          |
| NODE_SENTRY_DSN  	                      | Sentry DSN  	  	          	          	          	|
| NODE_SENTRY_DSN_FRONT  	                | Sentry DSN for client  	  	          	          	  |
| NODE_DOMAIN 	                          | Domain  	  	          	          	          	    |
| FF_ENVIRONMENT  	                      | Feature flags environment  	  	          	          |
| NODE_HUNTFLOW_API_URL  	                | Huntflow api url  	  	          	          	      |
| NODE_HUNTFLOW_TOKEN  	                  | Huntflow auth token  	  	          	          	    |
| NODE_HUNTFLOW_ACCOUNT_ID  	            | Huntflow auth account  	  	          	          	  |
| NODE_HUNTFLOW_RESERVE_VACANCY_ID  	    | Huntflow auth reserve vacancy  	  	          	      |
| NODE_CYPRESS_BASE_URL  	                | Cypress url  	  	          	          	          	|
| NODE_AWS_URL  	                        | AWS url  	  	          	          	          	    |
| NODE_S3_PUBLIC_URL  	                  | S3 url  	  	          	          	          	    |

All of these variables must be added to the Heroku hosting

### For radiator

Not required in dev mode

| NAME  	                                | DESCRIPTION  	    |
|---	                                    |---	              |
| RADIATOR_AUTH_TYPE  	                  | Google auth key  	|
| RADIATOR_PROJECT_ID  	                  | Google auth key  	|
| RADIATOR_PRIVATE_KEY_ID  	              | Google auth key  	|
| RADIATOR_PRIVATE_KEY  	                | Google auth key  	|
| RADIATOR_CLIENT_EMAIL  	                | Google auth key  	|
| RADIATOR_CLIENT_ID   	                  | Google auth key  	|
| RADIATOR_AUTH_URI  	                    | Google auth key  	|
| RADIATOR_TOKEN_URI  	                  | Google auth key  	|
| RADIATOR_PROVIDER_CERT_URL  	          | Google auth key  	|
| RADIATOR_CLIENT_CERT_URL  	            | Google auth key  	|
| RADIATOR_WEBHOOK_URL  	                | Slack webhook url |
| RADIATOR_GOOGLEAPIS_KEY  	              | Googleapis key  	|
| RADIATOR_TELEGRAM_TOKEN  	              | Telegram token    |

## 🚀 Deploy

### Staging

To send changes to the staging server, you should merge your branch to the **develop** branch

### Production

To send changes to the staging server, you should merge **develop** branch into **master** branch

## 🚓 Testing

### Coverage(unit)
![Coverage statements](client/static/badge-statements.svg)
![Coverage branches](client/static/badge-branches.svg)
![Coverage functions](client/static/badge-functions.svg)
![Coverage lines](client/static/badge-lines.svg)

### Commands

| COMMAND  	                             | DESCRIPTION  	      	      	     |
|---	                                   |---	                	      	       |
| `npm run test` 	                  	   | Run all tests  	  	  	  	  	   |
| `npm run test:unit` 	                 | Run all unit-tests  	  	     	     |
| `npm run test:unit:node`  	           | Run only server unit-tests	 	       |
| `npm run test:unit:browser`  	         | Run only browser unit-tests	  	   |
| `npm run test:staging`  	             | Run tests && send coverage to slack |
| `npm run test:e2e`   	                 | Run e2e tests 	  	        	  	   |
| `npm run generate:coverage-badges`	   | Generate coverage badges    	       |

## ✨ Linting

We're using some tools for linting our code - ESLint, Sass-Lint

### Commands
| COMMAND  	                     | DESCRIPTION  	      	      	     |
|---	                           |---	                	      	       |
| `npm run lint` 	               | Run all linters  	  	  	  	  	 |
| `npm run lint-es` 	           | Run only ESLint for js/vue files  	 |
| `npm run lint-vue-scss`  	     | Run only vue-scss lint              |
| `npm run lint-scss`  	         | Run only core scss lint  	         |

## 🐺 Snyk

Snyk is a tool for find and fix security vulnerabilities

### Commands
| COMMAND  	                     | DESCRIPTION  	      	      	     |
|---	                           |---	                	      	       |
| `npm run snyk-protect` 	       | Run snyk checking  	  	  	  	   |

## 😎 AWS S3

> [Amazon S3](https://aws.amazon.com/s3/) is used to store video files and pictures of the site.

> [Official Documentation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

### Install aws cli

You may install awscli using `apt` or `brew`

``` bash
sudo apt install awscli
```

or download zip bundle

``` bash
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip" \&& unzip awscli-bundle.zip \&& sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws \&& rm -rf awscli-bundle*
```

The result should be

``` bash
aws --version
aws-cli/1.16.161
```

### Setup

The current **AWS Access Key ID** and **AWS Secret Access Key** can be requested from the team.

```bash
aws configure
```

AWS will ask for the keys to specify the settings

``` bash
AWS Access Key ID: Key
AWS Secret Access Key: Key
Default region name: us-west-1
Default output format: json
```

Or just export the keys, in which case the access will only be in the terminal where the export is made.

``` bash
export AWS_ACCESS_KEY_ID="key"
```

``` bash
export AWS_SECRET_ACCESS_KEY="key"
```

It remains to update the environment variable and run the site.

In the root of the project should be a file .env, where you insert the variable **NODE_S3_PUBLIC_URL**

This variable must contain the url, which will be used to access s3 files.

>The link through which we will get pictures and videos **https://d6xkme6dcvajw.cloudfront.net/**

### AWS S3 Commands

| COMMAND  	                                	                  	                | DESCRIPTION  	      	      	    |
|---	                                    	                  	                  |---	                	      	    |
| `aws s3 ls s3://maddevsio/` 	                  	                  	          | Show available folders & files  	|
| `aws s3 ls s3://maddevsio/ && PRE images/ && PRE videos/` 	                    | Result  	  	      	      	    |
| `aws s3 cp --acl public-read folder s3://maddevsio/folder/ --recursive`  	      | Upload folder  	  	      	      |
| `aws s3 --recursive mv s3://maddevsio/folder/ s3://maddevsio/folder_2/`  	      | Rename folder  	  	      	      |
| `aws s3 rm --recursive s3://maddevsio/folder/`  	                	            | Remove folder  	  	      	      |
| `aws s3 cp --acl public-read ./folder/name.jpg s3://maddevsio/folder/`   	      | Upload file to folder  	  	      |
| `aws s3 rm s3://maddevsio/folder/name.jpg`	                    	              | Remove file  	  	      	        |
| `aws s3 sync --acl public-read ./folder s3://maddevsio/folder/`                 | Update files  	  	      	      |

## 🏳️ Feature flags

We're used feature-flags for display/hide some features on different environments.

### Create flag

For create a new feature flag, you need to open `@/featureFlags/config.js` file and add your flag into config with the following syntax:

```javascript
export const config = {
   myFeatureFlag: ['development', 'staging']
}
```

The name of your feature flag should be key in the `config`. Environments where your flag should return true should be value of your flag. It's an array of environments. At the moment we have 3 available environments:

* `development` - for local development
* `staging` - for staging(maddevs.co)
* `production` - for production(maddevs.io)

### Usage

#### with `<Feature>` component

The better option. You can simple use your feature-flag in the templates using globally registered component. Example:

```javascript
<Feature flag="myFeatureFlag">
   Some content
</Feature>
```

#### with `featureFlag()` method

Also you can use global method in your template:

```javascript
<div v-if="featureFlag('myFeatureFlag')">
   Some content
</div>
```

or in the component's code:

```javascript
 export default {
  methods: {
    send() {
      if(featureFlag('myFeatureFlag')) {
        // ...do something
      }
    }
  }
}
```

## 🔥 SEO-Analyzer

Github action for checks for errors in the html DOM

### Running

To run an analyzer you need to execute the following command:

```bash
npm run seo-analyze
```

If you have some problems with SEO you will be notified about that in the console:

```bash
████████████████████████████████████████ 100% | ETA: 0s | 233/233

File: dist/case-studies/namba-food/index.html
SEO defects found: 
There are 1 <img> tag without alt attribute
```
Otherwise, you should get success result:
```bash
 ████████████████████████████████████████ 100% | ETA: 0s | 233/233

 No any SEO defect found.
```

## 📻 Radiator
Advanced tool for collect core metrics from analytics and pagespeed and send it to our slack/telegram channels.

### Configure
For configure a radiator you need to go to the `server/radiator/index.js` file and change some configurations or create your own.
Additional info about configuration you can see in the [official radiator repo](https://github.com/maddevsio/mad-radiator)

### Running
Radiator runs on staging by default(using Feature Flags) but you can run it manually using the following command:
```bash
node server/radiator
```

## 👐 Additional docs
[How to remove link from sitemap.xml](./docs/how_to_remove_link_from_sitemap_xml.md)
