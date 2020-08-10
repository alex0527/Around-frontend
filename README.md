# Around: a Cloud and React based Social Network
Frontend
* Designed and implemented a geo-based social network web application with **React JS**. 
* Implemented features for users to create and browse posts and support search nearby posts (**Ant Design, GeoLocation API and Google Map API**.)
* Improved the authentication using token based registration/login/logout flow with **React Router v4** and server-side user authentication with **JWT** 

Backend
* Launched a scalable web service in **Go** to handle posts and deployed to **Google Cloud (Google Kubernetes Engine)** 
* Used **ElasticSearch (deployed to GCE)** to provide geo-location based search functions such that users can search nearby posts within a distance (e.g. 200km)
* Used **Google Vision API** to provide a face detection model and integrate with the Go service.

# Demo
[Around Demo Video!](http://recordit.co/awrQb1zn2I)

# Project Structure
![Image of Project Structure](https://github.com/alex0527/Around-frontend/blob/master/project%20structure.png)

# Why do you use Go?
I use Go as it’s one of the most popular programming languages and it has a very good balance of machine friendly and developer-friendly.# 
## How do you use Go?
I use Go to build a web service that has three main APIs: post, search, and cluster. The post API allows users to submit a post that can include a message, geolocation and media file. The search API allows users to search nearby posts based on their current location. The cluster API allows users to find all posts whose media file is a photo of a face.
## Why do you use Google Cloud?
Google Cloud has a large collection of some great tools and services which provide the features required by my project, such as GCE, GCS, GKE, Cloud Vision API, etc.

# Elasticsearch
## How do you use Elasticsearch?
I use Elasticsearch as a NoSQL database to store data posted by users. In addition, I create a geo index for the geolocation of each post so that I can provide a quick geolocation-based search for my users.

## How does the geo index improve search efficiency for you?
The geo index is based on a k-d tree that can prune away subtrees.

# GCS
## How do you use GCS?
I use GCS to store all media files posted by users. The corresponding link of each media file is stored as metadata in Elasticsearch.
## Why not store media files in the database directly?
Because a database is not good for storing a binary blob (like media file). First it’ll be much slower to store media files than store in a file system directly. Second, media files will increase the size of the database a lot which will be hard for maintenance. GCS is good for media file because it behaves like a file system, with high availability, durability, and is less expensive. also provides CDN service to serve files in edge servers to reduce loading latency.


# Authentication
## How do you implement the authentication functions in your project?
I use JSON Web Token for server authentication. 

## What’s the advantage of a token over session?

Stateless, Scalable and Decoupled
* Stateless: The back-end does not need to keep a record of tokens. 
* Self-contained, containing all the data required to check its validity. No DB lookup is needed. 
Mobile Friendly
* Native mobile platforms and cookies do not mix well. With a session-based approach, you simply store the session ID in a cookie. 
# GKE
## How do you use GKE?
I use GKE to deploy my Go service. I build my program into a docker image and run the image on virtual machines managed by my GKE cluster.  

## Why do you use GKE?

I use GKE because it can help to make my service run in a cluster with multiple virtual machines, which improved the reliability of my service. Since my service is running on multiple virtual machines, a single failure of one virtual machine won’t affect the whole service.
