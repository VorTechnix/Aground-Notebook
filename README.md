# Aground-Notebook
Adds a book for you to keep notes. Releases are hosted at https://aground.mod.io/notebook
## Description 
Notebook is dropped in-game in a chest under a random tree around the alchemist cave on start island. If that doesn't show up use `player.addItem('notebook')` in the dev console (Ctrl + Shift + D).

**Warning: Do not use quotation marks (single or double), |. or |* in any of your notes.

If you do use one of the above, you may be unable to open your Notebook or your notes may be corrupted.

In case of the above, you can use the following commands on the dev console:

`player.getString("notebook_notes");` to recover your notes as a ugly string

`player.setString("notebook_notes","");` to reset your notebook, deleting all notes.

This mod is more of a proof of concept and is not completely polished. It may update it further, if so be requested.

If anyone cares, here's the technical details of why you can now use numbers and special characters:

- |. and |* are all used for separating the parts of the code, since everything is in the same string. The specific formatting is:

      "Title|.Body|*Next Title|.Next Body"

- ' and " are used to determine strings start/ends in pretty much all code languages
- Numbers are no longer used for saving the ID, because we started using arrays ~~like civilized programmers~~ to keep track of things for deleting or editing purposes.
