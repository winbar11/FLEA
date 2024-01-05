<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne;
    let two, twoOne;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree, sixFour, sixFive, sixSix, sixSeven;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">LEGENDS LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Overview</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Overview of League</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Basic Rules</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Rules</h4>

    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Scoring Rules</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Trade Rules</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Trading</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Roster/Lineup Rules</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Roster/Lineup Rules</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Important Dates</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Sept. 6th - Cut Day</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Sept. 7th - FAAB Reset</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Week 11 - Trade Deadline</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixFour)}>6.4 Roster Lock - Start of NFL Playoffs </h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixFive)}>6.5 COMMISSIONER DISCRETION: Roster Unlock</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixSix)}>6.6 April 1st - Free Agency</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixSeven)}>6.7 Rookie Draft - 1st Week of May</h4>

    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 Overview</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Overview of League</h3>

    <p>The “FLEA” is currently a Fantasy Football league that is hosted on
the Sleeper App and commissioned by Windell Barfield and co-
commissioned by Clayton Shirley, a league historian of Hal Mansour, and
statistician of Dylan Baker. It is a DYNASTY SUPER FLEX based league
that uses a free-agent acquisition budget of $100 per preseason/season.
It is a 10-team league consisting of Windell Barfield, Clayton Shirley,
Trey Alexander, Morgan Rich, Hal Mansour, Spencer Hardin, Will Lowery,
Lance Barnes, Noah Walsh, and Dylan Baker. </p>

<ul>
<p>Former Winners in Chronological Order Include:</p>
    <li>2016: Windell Barfield*</li>
    <li>2017: Noah Walsh</li>
    <li>2018: Hal Mansour</li>
    <li>2019: Noah Walsh</li>
    <li>2020: Dylan Baker</li>
    <li>2021: Hal Mansour</li>
    <li>2022: Spencer Hardin</li>
    <li>2023: Lance Barnes</li>
</ul>

<p>The FLEA is a democracy with 8 acting voters. A vote is pushed
through when there are FIVE OR MORE YAYS. If there is a 4-4 tie, the co-
commissioner is the deciding vote.</p>
    

    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Basic Rules</h2>
    
    <h3 bind:this={twoOne}>2.1 Rules</h3>
    <p>All team owners MUST set an eligible lineup with active players. This
        includes teams who are “tanking”. Active means: This means no IR, Out,
        Bye week, or non-active players can be in your starting lineup.</p>

    <p>If you break this rule there is a ONE time grace period. After the
        SECOND time commissioners will set the lineup for you. After the THIRD
        time, commissioners will call for conversation with league owner and vote
        to replace if necessary.</p>

       <p>All IN-SEASON waivers clear on Tuesday after Monday’s
            games.
            All PRE-SEASON waivers clear daily.
       </p>     

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system is based off of a basic .5PPR system with an addition of milestones. The scoring system will never change without a majority league vote.</p>

<p>PASSING:</p>
    <ul>
        <li>TD: 6 Points</li>
        <li>2-Point Conv.: 2</li>
        <li> Pass Interception: -2</li>
        <li>Pick Six: -1</li>
        <li>40+y Completion Bonus: 1</li>
        <li>40+y Pass TD Bonus: 1</li>
    </ul>

<p>RUSHING:</p>
    <ul>
        <li>Rushing Yards 1 point every 10 yards (0.10 per yard)</li>
        <li>Rushing TD: 6</li>
        <li>2-Pt Conversion: 2</li>
        <li>40+ Yard Rush Bonus: 1</li>
        <li>40+ Yard Rush TD Bonus: 1</li>
    </ul>

<p>RECEIVING:</p>
    <ul>
        <li>Reception: 0.5</li>
        <li>Receiving Yards 1 point every 10 yards (0.10 per yard)</li>
        <li>Receiving TD: 6</li>
        <li>2-Pt Conversion: 2</li>
        <li>40+ Yard Reception Bonus: 1</li>
        <li>40+ Yard Reception TD Bonus: 1</li>
    </ul>

<p>BONUS:</p>
    <ul>
        <li>100-199 Yard Rushing Game: 1</li>
        <li>200+ Yard Rushing Game: 2</li>
        <li>100-199 Yard Receiving Game: 1</li>
        <li>200+ Yard Receiving Game: 2</li>
        <li>300-399 Yard Passing Game: .5</li>
        <li>400+ Yard Passing Game: 1</li>
        <li>100-199 Combined Rush + Rec Yards: 1</li>
        <li>200+ Combined Rush + Rec Yards: 1</li>
        <li>25+ pass completions: .25</li>
    </ul>

<p>MISC:</p>
    <ul>
        <li>Fumble: -1</li>
        <li>Fumble lost: -2</li>
</ul>        

    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Trade Rules</h2>
    
    <h3 bind:this={fourOne}>4.1 Trading</h3>
    <p>
        All trades are processed upon acceptance between 2-3 parties
        UNLESS there is a clear case of “collusion” defined as:
        noun: collusion
        secret or illegal cooperation or conspiracy, especially in order to
        cheat or deceive other league mates.
    </p>

    <p>
        AND/OR: A discrepancy within the other leaguemates that
        would then go to a commissioner vote FIRST and AFTER a league
        vote. Same voting rules apply.</p>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Roster/Lineup Rules</h2>
    
    <h3 bind:this={fiveOne}>5.1 Roster/Lineup Rules</h3>
    <p>25 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>SUPER-FLEX (QB/RB/WR/TE)</li>
    </ul>
    <p class="underscore">Rest of Roster</p>
    <ul>
        <li>13 - Bench Spots</li>
        <li>4 Taxi Squad Spots - Only Rookies can be placed on the Taxi Squad.</li>
    </ul>
    
    <p>18 Bench (Expanded by 5 between the keague draft and start of regular season)</p>


    <h2 class="sectionHeading" bind:this={six}>Section 6 Important Dates</h2>
    
    <h3 bind:this={sixOne}>6.1 Sept. 6th - Cut Day</h3>
    <p>
        Cut day is where each team
        owner trims down their teams to allow for their rosters to be
        “Eligible” for the season. Rosters should not have the “Your
        roster has too many players and is locked from making line-up
    </p>
    
    <h3 bind:this={sixTwo}>6.2 FAAB Reset</h3>
    <p>$100 will be reset in the morning for the entire 18 week season.</p>
    
    <h3 bind:this={sixThree}>6.3 Week 11 - Trade Deadline</h3>
    <p> 
        At the end of Week 10’s games, trading will be LOCKED until rosters UNLOCK in the post/preseason.
    </p>

    <h3 bind:this={sixFour}>6.4 Roster Unlock - Start of Playoffs</h3>
    <p> 
        After week 18’s games end, all rosters lock fully until NFL’s “Free Agency Period” begins. No moves, trades, cuts, or
        otherwise can be done during this lock. 
    </p>

    <h3 bind:this={sixFive}>6.5 COMMISSIONER DISCRETION: Roster Unlock</h3>
    <p> 
        The start of the NFL’s free agency period is also the day FLEA’s rosters unlock and trading can begin, no free agency adds.
    </p>

    <h3 bind:this={sixSix}>6.6 April 1st - Free Agency</h3>
    <p> 
        Free agency unlocks and teams are able to put in FAAB for eligible free agents (NO ROOKIES) on the waivers.
    </p>

    <h3 bind:this={sixSeven}>Rookie Draft - 1st Week of May</h3>
    <p> 
        Following the NFL’s real NFL draft, the FLEA will do its 4 round rookie draft.
    </p>

</div>
