import type { Metadata } from "next";
import { Fragment } from "react";
import questions from "@/data/wednesday-event.json";
import coordinates from "@/data/seal-windseeker.json";
import { IconLink } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Myth War Archive - Leveling Guide",
  description: "Myth War Archive | Comprehensive leveling guide for Myth War, from start to finish.",
};

export default function Page() {
  return (
    <>
      <h2>Leveling</h2>
      <hr className="divider" />
      <h3>Level 1-6 (Tutorial)</h3>
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
        <li>Rinse & repeat this process until you&apos;ve reached level 30.</li>
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
        If possible, it is also advised that the party leader uses a consumable &quot;Devil&apos;s Tears&quot; which
        allows you to ignore random monster encounters while traveling.
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
              Continue killing these three then reset the quest - their XP rewards will be locked to round 10&apos;s XP
              accumulation, successfully avoiding an XP reset.
            </li>
          </ol>
        </li>
      </ol>
      <p>
        If you&apos;re unable to find a party, a good alternative depending on your level is Tumulus 2-5, which can be
        entered both from the Blython Teleporter or by walking through Bone Desert from Desert City. There are also two
        leveling alternatives you can use from level 30 onwards, both of which are covered in the next section.
      </p>
      <hr className="divider" />
      <h3>Level 30+ (Drow & Wednesday Event)</h3>
      <h4>Drowcrusher</h4>
      <p>
        Drowcrusher is a monster that can be fought with a party from level 30 onwards. It rewards 100k XP per kill. The
        limit used to be set to five per day, however it is currently unlimited. In order to fight Drowcrusher (also
        referred to as &quot;Drow&quot;), you will need to give him a Tier 5 equipment corresponding to your class and
        gender. Below is a table that shows exactly which class-specific piece of equipment you need to give him - those
        can be obtained either through forging, buying from other players or using a Convenience Store item, the latter
        being the most efficient. You can ask for help in World Chat by saying &quot;Drow Lead looking for 1hit
        party&quot; and inviting the respondents to your party.
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
        <li>Repeat until out of your &quot;token&quot; equipment pieces.</li>
      </ol>
      <h4>Wednesday Event</h4>
      <p>
        <em>
          This is arguably one of the most profitable methods in both gold and XP as each round rewards you with ~100k
          XP to both you and your pet with a chance of obtaining Dispel Potions, Talent Points, Pet Intimacy, Perfect
          Carnelians and High-Graded Gems.
        </em>
      </p>
      <p>
        For the entire duration of Wednesday (server time), you can participate in a repeatable 100 round quest by going
        to Woodlingor and talking to Charity Ambassador in Elder Zone. You will be asked to visit a certain NPC to
        either answer a question, bring them an item or pass a message. Each NPC will give you a reward and another task
        to complete all the way up to 100 tasks.
      </p>
      <p>
        The general trick is to fill blank teleport scrolls and a few colored scrolls, leaving 1-2 free spaces for
        rewards and registering one scroll for each of the NPC locations at the bottom of your inventory, once you use
        one you can drag an empty scroll in the used slot and re-register that location for later.
      </p>
      <div className="wednesday-tables">
        <WednesdayNPCTable />
        <WednesdayItemTable />
      </div>
      <details>
        <summary>Questions & Answers</summary>
        Credit:{" "}
        <a
          className="link"
          href="https://mythwar2.freeforums.net/thread/27/wednesday-event-answers-originally-venky"
          target="_blank">
          https://mythwar2.freeforums.net/thread/27/wednesday-event-answers-originally-venky <IconLink />
        </a>
        <WednesdayQuestionsTable data={questions} />
      </details>
      <hr className="divider" />
      <h3>Level 50-60 (Woodlingor Defense)</h3>
      <p>Once you are level 50 you can now run through Woodlingor Defense with a level 50+ party.</p>
      <ol>
        <li>Talk to Defender in Woodlingor (277, 311), take note of the three locations he gives you.</li>
        <li>Visit the three given stores and interact with the NPCs.</li>
        <li>Eventually one will trigger a fight - defeat them and return to Defender (277, 311).</li>
      </ol>
      <p>
        Each round gives increasing XP, up to round 10. Unlike Howling Beast however, there is no way to
        &quot;stall&quot; a round, so you&apos;ll start back at round 1 afterwards.
      </p>
      <hr className="divider" />
      <h3>Level 60-70 (Blython Defense)</h3>
      <p>
        At level 60, you can move from Woodlingor to Blython Defense. It&apos;s virtually identical except with
        increased XP rewards.
      </p>
      <ol>
        <li>Talk to Defender in Blython (14, 80).</li>
        <li>Visit the listed locations and interact with the NPCs.</li>
        <li>Eventually one will trigger a fight - defeat them and return to Defender (14, 80).</li>
      </ol>
      <p>
        Note that when Defender says &quot;Armory&quot;, the actual location is Weaponry. 2x Armory means both NPCs
        inside are possible targets. Additionally, &quot;Accessories Shop&quot; means Stuff Shop.
      </p>
      <hr className="divider" />
      <h3>Level 60-80 (Bloodreaper)</h3>
      <hr className="divider" />
      <h3>Level 70-90 (Seal)</h3>
      <p>
        At level 70 you unlock a new repeatable, 10 round quest with increasing XP rewards. It is advise that you use
        both the Windseeker consumable for teleportation, and Devil&apos;s Tears to avoid random monster aggro.{" "}
        <b>
          At the bottom of this section is a Windseeker teleport coordinates cheatsheet to reach your target quickly.
        </b>
      </p>
      <ol>
        <li>Buy a Sealed scroll from Endelroth in Blython Bar.</li>
        <li>Right click the scroll to receive coordinates, travel to those coordinates.</li>
        <li>Upon arrival, right click the scroll again to initiate the fight.</li>
        <li>When victorious, return to Endelroth in Blython Bar to receive a new target.</li>
      </ol>
      <details>
        <summary>Coordinates cheatsheet</summary>
        <em>&quot;H&quot; stands for &quot;Hurricane&quot;, &quot;S&quot; stands for &quot;Spot&quot;.</em>
        <WindseekerTable data={coordinates} />
      </details>
      <hr className="divider" />
      <h3>Level 90+ (Papa Drow & Worn Messenger)</h3>
      <h4>Papa Drow</h4>
      <h4>Worn Messenger</h4>
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

function WednesdayNPCTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>NPC</th>
          <th>Map</th>
          <th>Coordinates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adventurer</td>
          <td>Revive Arena</td>
          <td>?</td>
        </tr>
        <tr>
          <td>Mine Overseer</td>
          <td>Bone Desert</td>
          <td>?</td>
        </tr>
        <tr>
          <td>Peddler</td>
          <td>Southern Rivage</td>
          <td>?</td>
        </tr>
        <tr>
          <td>Prophet</td>
          <td>Desert City</td>
          <td>(128, 74)</td>
        </tr>
        <tr>
          <td>Teacher</td>
          <td>Cursed Abyss</td>
          <td>?</td>
        </tr>
      </tbody>
    </table>
  );
}

function WednesdayItemTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teleport Scroll (Blank)</td>
          <td>800</td>
          <td>Any</td>
        </tr>
        <tr>
          <td>Teleport Scroll (Blue)</td>
          <td>4000</td>
          <td>Desert City & Demon Square</td>
        </tr>
        <tr>
          <td>Teleport Scroll (Red)</td>
          <td>4000</td>
          <td>Desert City & Demon Square</td>
        </tr>
        <tr>
          <td>Carving Knife</td>
          <td>100</td>
          <td>Woodlingor & Demon Square</td>
        </tr>
      </tbody>
    </table>
  );
}

function WednesdayQuestionsTable({ data }: { data: { q: string; a: string }[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.q}>
            <td>{entry.q}</td>
            <td>{entry.a}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface WindseekerDataTypes {
  zone: string;
  coords: { coord: string; seeker: string }[];
}

function WindseekerTable({ data }: { data: WindseekerDataTypes[] }) {
  return (
    <table className="table-rowspan">
      <thead>
        <tr>
          <th>Zone</th>
          <th>Coords</th>
          <th>Seeker</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <Fragment key={entry.zone}>
            <tr>
              <th rowSpan={entry.coords.length}>{entry.zone}</th>
              <td>{entry.coords[0]?.coord}</td>
              <td>{entry.coords[0]?.seeker}</td>
            </tr>
            {entry.coords.slice(1).map((coord) => (
              <tr key={`${coord.coord}-${coord.seeker}`}>
                <td>{coord.coord}</td>
                <td>{coord.seeker}</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
