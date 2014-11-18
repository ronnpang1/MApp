Google Drive Documents:
mjolnirapp@gmail.com,
password: thorshammer

##Repository for App Project:
* Mjolnir directory contains app
* server directory contains node.js server stuff
	
##NB:
* Mjolnir/platform directory in this repo should always be empty, when pushing insure you do not include your platform. This is because the location of our android sdk is not the same and in the project.property file this path cannot be deffined using ANDROID_HOME for some reason, therefore when building the application, it will fail.

##tools that I suggest using:
* IDE: Brackets, you could also you netbeans or whatever you want doesn't matter.
* Merging tool: Meld (important for updating repo and workspace)

#####A reminder always make sure you are not overriding someone work so keep your workspace updated and use meld tool to see the changes you have made.

##Info on cordova

1. So initially you will need to add platforms after getting this latest code base
  * cordova platform add {platform name}  (i.e. android)

2. To build
  * cordova build {platform name}

3. To run or emulate
  * cordova emulate {platform name}
  * cordova run {platform nam}

####[This is all we need to know but for more info](http://cordova.apache.org/docs/en/4.0.0/index.html)

####[For git help and documentation](http://git-scm.com/docs/git-help)
