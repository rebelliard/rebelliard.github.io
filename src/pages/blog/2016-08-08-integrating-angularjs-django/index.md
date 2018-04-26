---
layout: post
title: "Integrating AngularJS with Django"
date: '2016-08-08'
permalink: "/blog/integrating-angularjs-django/"
description: "How to create a single-page application using AngularJS and the Django Framework."
teaser:      "How to create a single-page application using AngularJS and the Django Framework."
tags: ['angularjs']
image: '2016-08-08/django-logo-negative.png'
---

In 3 steps, you can easily setup a single-page application with an [AngularJS](https://angularjs.org/) frontend and backed by the [Django Framework](https://www.djangoproject.com/):

## Setup Django

On your Django's `urls.py` file:

    urlpatterns = patterns("",
        ("^admin/", include(admin.site.urls)),

        # Handle all other URLs via AngularJS.
        url(r'^.*$', TemplateView.as_view(
          template_name="index.html"), name="home"
        ),
    )

### Mezzanine

* [Optional] If you want to integrate AngularJS with the [Django's Mezzanine CMS](http://mezzanine.jupo.org/), make sure Mezzanine's routes are defined **before** AngularJS' catch-all "home" route:

        urlpatterns = patterns("",
            ("^admin/", include(admin.site.urls)),

            # Mezzanine pages.
            ("^", include("mezzanine.urls")),

            # Handle all other URLs via AngularJS.
            url(r'^.*$', TemplateView.as_view(
              template_name="index.html"), name="home"
            ),
        )

## Setup AngularJS

Enable HTML5 Mode in your AngularJS configuration module:

    angular.module('app').config(
      function ($routeProvider, locationProvider) {
        $routeProvider
          .when('/', {
            templateUrl: '/static/app/views/home.html',
          })
          .when('/profile/:profileId', {
            templateUrl: '/static/app/views/profile.html',
            controller: 'ProfileCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });

          $locationProvider.html5Mode(true);
        });
      }
    );

* This also works with the [ui-router](https://github.com/angular-ui/ui-router).

## Setup the HTML

Set the [base](https://developer.mozilla.org/en/docs/Web/HTML/Element/base) tag in your main `index.html` file:

    <!doctype html>
    <html class="no-js" ng-app="app">
      <head>
        <!-- HTML5 Mode. -->
        <base href="/">
      </head>
      <body>
        <!-- etc -->
      </body>
    </html>

These three steps will enable AngularJS to handle your application's frontend and Django to take care of the backend. Before deploying to production, make sure you have a proper strategy for serving [static files in production](https://docs.djangoproject.com/en/1.10/howto/static-files/deployment/#serving-static-files-in-production).

## Read more

* [Angular HTML5 mode or pretty URLs on Apache (using htaccess)](https://ngmilk.rocks/2015/03/09/angularjs-html5-mode-or-pretty-urls-on-apache-using-htaccess/).
