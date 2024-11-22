export default function Page() {
  return (
    <>
      <div className="maps-header">
        <h2>Leveling</h2>
      </div>
      <hr className="divider" />
      <h3>Level 1-6 (Tutorial)</h3>
      {/* TODO: ACTUALLY REWRITE THIS */}
      <ol>
        <li>Create a new character</li>
        <li>Talk to Skill Mentor in Woodlingor (259, 57).</li>
        <li>Talk to Skill Guide (291, 37).</li>
        <li>Talk to Race Instructor in Sky Passage (19, 104).</li>
        <li>Talk to Pet Manager (53, 116).</li>
        <li>Talk to Battle Instructor (31, 46), initiate a fight.</li>
        <li>Go east to Sky Garden, fight random mobs until you collect the required amount of pines.</li>
        <li>Return to Battle Instructor in Sky Passage (31, 46).</li>
        <li>After, return to Sky Garden and defeat Savage (78, 47).</li>
        <li>Go back to Battle Instructor in Sky Passage (31, 46), fight to level 6 if not already there.</li>
      </ol>
      <hr className="divider" />
      <h3>Level 6-21 (New Horizon/Best Coagent)</h3>
      <p>
        One of the things you can do from level 6 is ask for help from players with the title of New Horizon or Best
        Coagent, respectively level 50-69 & 70+.
      </p>
      <ol>
        <li>Join an NH/BC party - the bigger the party the better the XP.</li>
        <li>Have them train you in Revive Arena east of Woodlingor all the way up to level 21.</li>
      </ol>
      <p>If you can&apos;t find help, refer to the next part which gives you a slower alternative to 21.</p>
      <hr className="divider" />
      <h3>Level 6-21-30 (Stonesmith)</h3>
      <p>
        You can begin the Stonesmith quest from level 6 onwards by visiting Stonesmith in Woodlingor (162, 342). He will
        task you with collecting a certain amount of items by fighting in different zones depending on your level. Those
        areas are Revive Arena, Snow Ridge, Sunset Plains, Southern Rivage, Badlands and Bone Desert. The first three
        are connected between the two cities of Woodlingor and Blython, the last three are connected between Blython and
        Desert City - which can be accessed through the Woodlingor Teleporter (87, 136).
      </p>
      <ol>
        <li>Visit Stonesmith in Woodlingor (162, 343).</li>
        <li>
          Depending on your level, go to your assigned zone and fight monsters repeatedly until you acquire the required
          amount of items.
        </li>
        <li>
          Once you have done so, return to Stonesmith in Woodlingor (162, 343) and turn the items in for 100-150% of
          your level in experience.
        </li>
        <li>Rinse & repeat this process until you've reached level 30.</li>
      </ol>
      <hr className="divider" />
      <h3>Level 30-50 (Howling Beast)</h3>
      <p>
        At level 30, head back to Revive Arena with a party and begin the Howling Beast quest by talking to Howling
        Beast (136, 97). This will initiate a quest where you are to fight against five monsters in different zones,
        each fight rewarding you with increasing XP. Upon killing the last monster, you will have completed one round -
        up to ten rounds total. Each round will see you fighting the same monsters, except with better XP rewards.{" "}
        <b>
          Finishing round ten will reset the XP accumulation - see steps below for the most efficient farming strategy.
        </b>{" "}
        If possible, it is also advised that the party leader uses a consumable "Devil's Tears" which allows you to
        ignore random monster encounters while traveling.
      </p>
      <ol>
        <li>Talk to Howling Beast in Revive Arena (136, 97) to begin the quest/round.</li>
        <li>Defeat Bat Beast (126, 164).</li>
        <li>Travel East to Snow Ridge and defeat Flower Witch (23, 167).</li>
        <li>Go south, then west, through Blython and to Southern Rivage.</li>
        <li>Once in Southern Rivage, defeat Flame Beast (92, 18).</li>
        <li>Head North and defeat Cave Clayman (29, 112) to complete a round.</li>
        <li>
          Repeat this until you reach round 10, then:{" "}
          <ol>
            <li>Defeat Howling Beast in Revive Arena (136, 96).</li>
            <li>Defeat Bat Beast (126, 164).</li>
            <li>Travel East to Snow Ridge and defeat Flower Witch (23, 167).</li>
            <li>Open your quest log and quit the Howling Beast quest.</li>
            <li>
              Continue killing these three then reset the quest - their XP rewards will be locked to round 10's XP
              accumulation, successfully avoiding an XP reset.
            </li>
          </ol>
        </li>
      </ol>
      <p>
        If you're unable to find a party, a good alternative depending on your level is Tumulus 2-5, which can be
        entered both from the Blython Teleporter or by walking through Bone Desert from Desert City. There are also two
        leveling alternatives you can use from level 30 onwards, both of which are covered in the next section.
      </p>
      <hr className="divider" />
      <h3>Level 30+ (Drow & Wednesday Event)</h3>
      <h4>Drowcrusher</h4>
      <p>
        Drowcrusher is a monster that can be fought with a party from level 30 onwards. It rewards 100k XP per kill. The
        limit used to be set to five per day, however it is currently unlimited. In order to fight Drowcrusher (also
        referred to as "Drow"), you will need to give him a Tier 5 equipment corresponding to your class and gender.
        Below is a table that shows exactly which class-specific piece of equipment you need to give him - those can be
        obtained either through forging, buying from other players or using a Convenience Store item, the latter being
        the most efficient. You can ask for help in World Chat by saying "Drow Lead looking for 1hit party" and inviting
        the respondents to your party.
      </p>
      <DrowTable />
      <ol>
        <li>Prepare many +5 equipment pieces matching your class & gender.</li>
        <li>
          Head to Drowcrusher in Cursed Abyss (181, 166) north of Demon Square, accessible through Woodlingor
          teleporter.
        </li>
        <li>
          In World chat, announce that you are seeking 1 hit mages/party for drow and mention how many spots you have
          open in your party.
        </li>
        <li>
          Once ready, give Drowcrusher an equipment - the fight will begin and upon completion will grant you 100k XP.
        </li>
        <li>Repeat until out of your "token" equipment pieces.</li>
      </ol>
      <h4></h4>
    </>
  );
}

function DrowTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Gender</th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Borg</td>
          <td>Male</td>
          <td>+5 Weapon</td>
        </tr>
        <tr>
          <td>Borg</td>
          <td>Female</td>
          <td>+5 Weapon</td>
        </tr>
        <tr>
          <td>Centaur</td>
          <td>Male</td>
          <td>+5 Shoe</td>
        </tr>
        <tr>
          <td>Centaur</td>
          <td>Female</td>
          <td>+5 Armor</td>
        </tr>
        <tr>
          <td>Human</td>
          <td>Male</td>
          <td>+5 Armor</td>
        </tr>
        <tr>
          <td>Human</td>
          <td>Female</td>
          <td>+5 Armor</td>
        </tr>
        <tr>
          <td>Mage</td>
          <td>Male</td>
          <td>+5 Armor</td>
        </tr>
        <tr>
          <td>Mage</td>
          <td>Female</td>
          <td>+5 Helm</td>
        </tr>
      </tbody>
    </table>
  );
}
