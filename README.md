EngineIO Development Setup
==========================

1. Create a folder for the class / project
------------------------------------------

    mkdir socket

2. Clone engine, socket projects
--------------------------------

    cd socket
    git clone yout-girhub-engine.io-fork
    git clone yout-girhub-socket.io-fork
    git clone yout-girhub-socket.io-client-fork
    git clone yout-girhub-engine.io-client-fork

And so on

3. Clone **this** repository as "experiments"
---------------------------------------------

    git clone https://github.com/eob/engineio-experiments.git experiments
 
4. Create symlinks from the project directories into experiments
----------------------------------------------------------------

For example, on linux or mac, type this:

    ln -s engine.io experiments/.
    ln -s engine.io-client experiments/.
    ln -s socket.io experiments/.
    ln -s socket.io-client experiments/.

On windows, create shortcuts.

5. Quick Check
--------------

Your filesystem should now look like this:

    socket
      |+ engine.io/
      |+ engine.io-client/
      |+ socket.io/
      |+ socket.io-client/
      |~ experiment
          |- index.html
          |- app.js
          |+ engine.io/ [SYMLINK]
          |+ engine.io-client/ [SYMLINK]
          |+ socket.io/ [SYMLINK]
          |+ socket.io-client/ [SYMLINK]

6. Try running the example server
---------------------------------

    cd experiments
    node app.js

Then go to `localhost:8000` and look at the web console. You should see:

    Hello!
    Socket closed.

Note: at this step, you might run into errors with missing npm modules, for
example `express`. Just npm install anything you're missing.
