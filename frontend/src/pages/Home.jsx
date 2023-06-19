import { Link } from "react-router-dom";

import compassImage from "../assets/compass.png";
import jackImage from "../assets/jack.gif";
import sparrowImage from "../assets/sparrow.jpg";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Checkpoint 3</h1>
        <div className="row introduction">
          <div className="col-sm-9">
            <p>
              The most famous pirate in the world, the great and inimitable
              Captain Jack Sparrow, is looking for the lost treasure of Rackham
              the Red, an old and pitiless pirate who spread terror among the
              Caribbean seas, a long long time ago.
            </p>
            <p>
              An old sailor from the Kingdom of France, Captain Haddock, has
              given Jack a mysterious map with many islands on it. Haddock only
              knew that the treasure is buried on one of these islands. Jack and
              his crew have the mission to navigate to each of them, until they
              find the gold coins and precious gems that constitute the hidden
              treasure.
            </p>
          </div>
          <div className="col-sm-3">
            <img className="sparrow" src={sparrowImage} alt="Jack Sparrow" />
          </div>
          <div className="col-sm-12 text-center">
            <img className="compass" src={compassImage} alt="compass" />
          </div>
          <div className="col-sm-12">
            <p>
              Take control of the Black Perl, Jack's magnificent ship, and
              navigate among the oceans. Avoid krakens, storms or other pirates
              and be the first to find the treasure! It's time to finish your
              last bottle of rum and let's start this adventure!
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid deep-sea">
        <div className="row">
          <div className="col-sm-12">
            <h2>Your mission</h2>
            <ol className="instructions">
              <li>
                <p>
                  Hello ship mate,{" "}
                  <strong>read carefully the instructions </strong> below before
                  starting to code ;)
                </p>
                <p>
                  Each step is relatively independent, do not hesitate to move
                  on to the next if you stay blocked too long on one step. Also,
                  remember you can request assistance from your trainer ;)
                </p>
                <p>
                  You have to push your code on this project repository, with
                  your lastname and firstname as a branch name (e.g.
                  SPARROW_JACK). Furthermore, think about atomic commits!
                </p>
              </li>

              <li>
                <p>
                  Jack likes to hear music while navigating. He wants to create
                  his own app to handle albums and tracks. Help him by creating
                  the entity relationship diagram (MCD) for the following
                  features:
                </p>
                <ul>
                  <li>
                    Jack needs to be able to retrieve the full list of albums.
                  </li>
                  <li>
                    Each album has a title, a genre, a picture and an artist.
                  </li>
                  <li>
                    An album can contain several tracks, but should at least
                    contain one.
                  </li>
                  <li>A track belongs to one and only one album.</li>
                  <li>Each track has a title and a youtube url.</li>
                </ul>
                <p>Save a picture of your diagram into this repository.</p>
              </li>

              <li>
                <p>
                  Look at the navbar, there is a link to the{" "}
                  <Link to="/map">Map</Link>. Boats can navigate on this map,
                  which is built with tiles. Except right now the map renders
                  neitheir boats nor tiles. Create 2 routes in{" "}
                  <code>backend/src/router.js</code>:
                </p>
                <ul>
                  <li>
                    <code>GET /tiles</code>: send all tiles from the database.
                  </li>
                  <li>
                    <code>GET /boats</code>: send all boats from the database.
                  </li>
                </ul>
                <p>
                  Nothing to do in the frontend side. It's already fetching your
                  routes. Once they are functional, you should see the map tiles
                  and some boats (you may need to reload the page in your
                  browser).
                </p>
              </li>

              <li>
                <p>
                  You're only interested to follow the Black Pearl. Create a{" "}
                  <code>findByName(name)</code> method in{" "}
                  <code>backend/src/models/BoatManager.js</code>: the method
                  should select only the boats with the given name.
                </p>
                <p>
                  The frontend is requesting the path{" "}
                  <code>/boats?name=Black Pearl</code> to get the boats. Modify
                  your backend route <code>GET /boats</code> to use your{" "}
                  <code>findByName</code> method.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Try to{" "}
                  <code>console.warn</code> the value of <code>req.query</code>{" "}
                  in the handler of your route.
                </details>
              </li>

              <li>
                <p>
                  Create a route to update a boat: this will be used by the
                  N/S/E/W links aside the map. Once again, nothing on the
                  frontend side: the links are already functional, and waiting
                  for you to create the backend update route. Here is a request
                  sample your route should be able to handle:
                </p>
                <blockquote>
                  <code>
                    PUT /boats/42
                    <br />
                    Content-type: application/json
                    <br />
                    <br />
                    {"{"} "coord_x": 5, "coord_y": 6 {"}"}
                  </code>
                </blockquote>
                <details>
                  <summary className="hint">Hint: </summary>Your route should be
                  declared using the put verb and for the path{" "}
                  <code>"/boats/:id"</code>.
                </details>
                <details>
                  <summary className="hint">Hint 2: </summary>You can retrieve
                  the id through <code>req.params</code> and coordinates through{" "}
                  <code>req.body</code>.
                </details>
              </li>

              <li>
                <p>
                  Right now, if you move your boat to a nonexistent tile, the
                  boat just disappears and there is no error message. To prevent
                  Jack from getting lost, you will have to prevent moving
                  outside the map. Create a <code>tileExists.js</code> file in
                  the <code>backend/src/services</code> folder. The file should
                  export a middleware (it takes req, res and next as arguments).
                  It should test if a tile with the given coordinates (
                  <code>req.body.coord_x</code> and{" "}
                  <code>req.body.coord_y</code>) exists or not. If the tile
                  exists, continue to the next middleware. If the tile doesn't
                  exist, send back an error status (422). Use this new
                  middleware in the <code>PUT /boats/:id</code> route, to
                  prevent the boat from moving if the destination tile does not
                  exist.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Use TileManager in
                  your middleware. You must add a method to it in order to find
                  tiles from their coordinates.
                </details>
                <details>
                  <summary className="hint">Hint 2: </summary>If you have
                  difficulties using TileManager, you can check the X coordinate
                  is between 0 and 11 (included) and the Y coordinate is between
                  0 and 5 (included). outside the server.
                </details>
              </li>

              <li>
                <p>
                  In the Map page, in the <em>Information</em> panel, you should
                  see the coordinates of the boat. Modify the SQL request in
                  your <code>findByName</code> method so it selects the type of
                  the tiles associated to the boats. A tile is associated to a
                  boat if they have the same coordinates.
                </p>
                <p>
                  Once your request is upgraded, you should see the type of the
                  tile under the Black Pearl in the Information of the Map page.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>You should use a{" "}
                  <a href="https://stackoverflow.com/questions/16597660/sql-join-on-multiple-columns-in-same-tables">
                    join on multiple columns
                  </a>
                  . Be sure to explicitly select the id, the coords and the name
                  of the boat.
                </details>
                <details>
                  <summary className="hint">Hint2: </summary>Join on{" "}
                  <code>coord_x</code> AND <code>coord_y</code>.
                </details>
              </li>

              <li>
                <p>
                  Add the property <code>has_treasure</code> (a boolean) to the
                  tile entity. It will be <em>not nullable</em> and the default
                  value will be <em>false</em>. It will allow to know if the
                  treasure is on a tile or not. Don't forget to use the migrate
                  command to update your database. This property should be
                  displayed as well in the Information of the Map page.
                </p>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Create a <code>POST /games</code>{" "}
                  route to start a new game. This means:
                </p>
                <ul>
                  <li>
                    Putting back the Pearl to its original position (1, 1).
                  </li>
                  <li>
                    Reset <code>has_treasure</code> to <em>false</em> on every
                    tile.
                  </li>
                  <li>Hide the treasure on a random island.</li>
                  <li>Send back status 201 when everything is done.</li>
                </ul>
                <p>
                  When ready to play, hit the <em>Start</em> button in the
                  navigation bar.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Add a method{" "}
                  <code>hideTreasure</code> in TileManager. You may use{" "}
                  <a href="https://thewebdev.info/2022/03/05/how-to-run-multiple-statements-in-one-query-with-node-mysql/">
                    multiple update statements separated with a semicolon
                  </a>{" "}
                  in your query ;)
                </details>
                <details>
                  <summary className="hint">Hint2: </summary>Look at{" "}
                  <a href="https://www.petefreitag.com/item/466.cfm">
                    "SQL to Select a random row from a database table"
                  </a>
                  .
                </details>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Create a winning page, and redirect
                  to it when Jack finds the treasure.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Sorry, not on this
                  one :p
                </details>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Improve the style of the Information
                  panel and of the NSEW links.
                </p>
              </li>
            </ol>
            <blockquote>Good luck !</blockquote>
          </div>

          <div className="col-sm-12 text-center">
            <img src={jackImage} alt="Good Luck!" />
          </div>
        </div>
      </div>
    </>
  );
}
