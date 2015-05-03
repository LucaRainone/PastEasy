##What it does?

Simply implements the paste image feature crom ClipBoard on some Google services (hangouts, doc, g+).
The package could be found [here](https://chrome.google.com/webstore/detail/pasteasy/mfpmnkpibkajokfpbeljneedcafjphka)

##How?

It's obvously a trick.
In hangouts there is already a feature for painting lines and send them to your contact.
This feature use a HTML canvas element. But a canvas element has a wonderfull option "drawImage".
You can imagine the rest.

In Google doc, you have the option "Drag a photo here". It's limited to real files.
However, with some trick, I can build something of similar of a file and drop it in area programmatically.
So, Google does not see the difference. :-)

##Issues
* Well. This could break the option "Paint" of google hangouts. If you really want this, you can open the hangout in 
a new window and restore it (or leave it as new window).
* It's possible that Google changes the DOM Classes or positions. It could break anything. 
If it happens, I'll provide new version with fixed html path. (or you can send me a patch :-))

##Install by sources

If you don't want install it from Chrome Web Store, you can download this sources and load only the folder PastEasy
as "unpacked extension" under "Developer Mode".