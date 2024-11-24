import Link from "next/link";
import { IconLink } from "@/components/Icons";
import { BtnScrollToTop } from "@/components/BtnScrollToTop";

export default function Page() {
  return (
    <>
      <header className="panel">
        <h1>Myth War Archive - Home</h1>
      </header>
      <main className="panel">
        <section>
          <h2>Welcome to Myth War Archive</h2>
          <hr className="divider" />
          <p>
            Myth War Archive is your go-to resource for everything related to Myth War Online and Myth War II. Whether
            you&apos;re a long-time fan or just discovering the games, this site is dedicated to preserving their legacy
            and supporting the communities that keep them alive.
          </p>
          <b>Here&apos;s what you&apos;ll find:</b>
          <ul className="dolist">
            <li>Information: All types of information about the game, for preservation purposes.</li>
            <li>
              Asset library: From the original music and ambient tracks, to wallpapers, character sprites and other
              assets from the game.
            </li>
            <li>Tools: Tools for reverse-engineering, modding & miscellenuous applications.</li>
            <li>Community Links: Active servers, social groups, and fan-driven projects to connect with.</li>
          </ul>
          <p>
            This site is built to celebrate the creativity and spirit of the Myth War community. Start exploring and
            reconnect with the world of Myth War.
          </p>
          <p>
            You can contact the website creator on{" "}
            <a href="https://github.com/MGSimard" target="_blank" className="link">
              Github
            </a>{" "}
            or{" "}
            <a href="https://x.com/MGSimard" target="_blank" className="link">
              X
            </a>
            .
          </p>
        </section>
        <section>
          <h2>About Myth War</h2>
          <hr className="divider" />
          <h3>The Development and Evolution of Myth War Online</h3>
          <p>
            Myth War Online, developed by Unigium and published by Sing-Gium International, then IGG in the west—was a
            free-to-play 2.5D MMORPG that brought players into a vibrant, mythological world filled with unique
            creatures and classic RPG gameplay elements. Released in 2006 in China, the game became known for its
            turn-based Active Time Battle system, inspired by iconic RPGs like Final Fantasy. Players could explore the
            game&apos;s rich fantasy setting through four character races; Humans, Centaurs, Mages, and Borgs. The game
            also featured a robust pet system allowing pets to fight alongside their masters.
          </p>
          <h3>A Unique Game Design</h3>
          <b>The game distinguished itself with features such as:</b>
          <ul className="dolist">
            <li>The Rumor System, where players could interact with NPCs to spread tales about their characters.</li>
            <li>A Master and Apprentice System, fostering mentorship between new and experienced players.</li>
            <li>Engaging quests woven with mythological lore that could influence the game world itself.</li>
          </ul>
          <p>
            Players also enjoyed over 200 skill sets, more than 100 trainable pets, and expansive, beautifully
            illustrated isometric 2D maps. Regular updates and content expansions kept the community engaged, making it
            a standout in its genre.
          </p>
          <h3>A Story of Resilience in Development</h3>
          <p>
            The development of Myth War Online has a compelling backstory. Unigium emerged from the ruins of Xiamen
            Xinruishi Multimedia Co., Ltd.(厦门新瑞狮多媒体有限公司) or Xinruishi(新瑞狮) for short. It was a
            once-prominent Chinese game studio founded by Zhuang Jinlong(庄锦隆), whose leadership earned him accolades
            as one of the &quot;Top Ten Chinese IT Leaders of the Year&quot; in 2004. Following the malicious bankruptcy
            of Xinruishi in 2003, Zhuang and many of his team members joined Unigium, bringing with them years of
            expertise.
          </p>
          <p>
            The collaborative effort between Unigium and its Singapore counterpart, Sing-Gium International, under the
            umbrella of Gium International, allowed the team to launch Myth War Online successfully. The game&apos;s
            distinct musical score, produced by Li Dongjun(李东军) and performed by the Singapore National Symphony
            Orchestra, further highlighted their dedication to quality. The development of Myth War Online was supported
            with some outsourcing with developers and artists from Japan and the United States.
          </p>
          <h3>The Transition to Myth War II</h3>
          <p>
            In 2009, Myth War Online was closed to pave the way for its sequel, Myth War II. This new iteration refined
            and streamlined gameplay with features like updated character designs, enhanced graphics, new boss
            mechanics, and systems like Second Rebirth, Relationships & Marriage, Power Worship, Holy Sets, Mine War
            Events and more. Despite these improvements, Myth War II struggled to retain its predecessor&apos;s magic
            and ultimately shut down in 2015.
          </p>
          <h3>The Legacy of Myth War</h3>
          <p>
            Though the official servers for both games have long been offline, the Myth War community persists. Today,
            the only fully operational private server, TDT, runs Myth War II, keeping the spirit of the game alive. The
            only other known server, the once-promising Chinese sj.51wgg.com, has remained dormant since their planned
            reopenings in 2019 and 2021 failed to materialize.
          </p>
          <h3>Preserving the Myth</h3>
          <p>
            Projects like Myth War Archive ensure that the legacy of Myth War Online and Myth War II endures. By
            providing access to game assets, maps, music, and fostering a hub for remaining communities, fans can
            continue to celebrate the creativity and passion that went into this ambitious MMORPG.
          </p>
        </section>
        <section>
          <h2>Timeline</h2>
          <hr className="divider" />
          <h3>Pre</h3>
          <h4>1999-??-??</h4>
          <p>Zhuang Jinlong(庄锦隆) founds & leads Xiamen Xinruishi Multimedia Co., Ltd.(厦门新瑞狮多媒体有限公司).</p>
          <h4>????-??-??</h4>
          <p>Main Taiwanese investor named Cai Chengrui(个名叫蔡呈瑞的) joins in.</p>
          <h4>2003-??-??</h4>
          <p>
            Cai Chengrui(个名叫蔡呈瑞的) withdraws most of his funds without the knowledge of the company's employees,
            which paralyzed the company's development plan and eventually led to their collapse.
          </p>
          <h4>2003 - December 14th</h4>
          <p>
            Without funding and late wages, the company is unable to continue operating. Assets are sold, office
            vacated.{" "}
            <Link
              className="link"
              href="https://web.archive.org/web/20241124183150/https://forum.gamer.com.tw/C.php?bsn=3987&snA=25"
              target="_blank">
              Full collapse of Xinruishi.
              <IconLink />
            </Link>
          </p>
          <h4>2004-??-??</h4>
          <p>
            Zhuang Jinlong(庄锦隆) elected as "Top Ten Chinese IT Person of the Year" & "Top Ten Leaders of the Year".
          </p>
          <h4>2006-??-??</h4>
          <p>
            Zhuang Jinlong(庄锦隆) joins Unigium(联竣信息科技（上海）有限公司) and becomes the Director & General
            Manager of the "God World/Myth War"(神界) project team. A large portion of the employees, development
            tooling and assets come directly from Xinruishi.{" "}
            <Link
              className="link"
              href="https://web.archive.org/web/20241124210600/https://news.17173.com/content/2006-11-22/20061122121131838,1.shtml"
              target="_blank">
              More information
              <IconLink />
            </Link>{" "}
            about the core team behind Myth War Online's development.
          </p>
          <hr className="divider" />
          <h3>Myth War Online</h3>
          <h4>2005 - May 10th</h4>
          <p>Myth War Online's Chinese Closed Beta, published by Sing-Gium International.</p>
          <h4>?? - ?? ??</h4>
          <p>Myth War Online officially releases in China.</p>
          <h4>2006 - July 7th</h4>
          <p>Myth War Online is released in North America, published by IGG.</p>
          <hr className="divider" />
          <h3>Myth War II</h3>
          <h4>2015 - January 15th</h4>
          <p></p>
          <h4>2015 - February 16th</h4>
          <p>Myth War II servers are permanently taken down.</p>
          <hr className="divider" />
          <h3>Myth War 3 Legends of the Dark</h3>
          <h4>2009-01-15</h4>
          <p>
            <Link
              className="link"
              href="https://web.archive.org/web/20090122002318/http://mw2.igg.com/news/news.php?aid=477"
              target="_blank">
              Development is publicly announced
              <IconLink />
            </Link>
            . Planned release date during Christmas 2009.{" "}
          </p>
          <h4>2009-06-28</h4>
          <p>
            Trademark for Myth War 3 Legends of the Dark's logo is{" "}
            <Link
              className="link"
              href="https://trademarks.justia.com/777/69/myth-war-legends-of-the-dark-77769734.html">
              filed
              <IconLink />
            </Link>
            .
          </p>
        </section>
        <BtnScrollToTop />
      </main>
    </>
  );
}
