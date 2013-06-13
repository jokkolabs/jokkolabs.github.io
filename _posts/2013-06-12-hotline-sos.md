---
title: What did you do for democracy today?
layout: post
category: blog
author: <a href="mailto:rgaudin@jokkolabs.net">rgaudin</a>
---

[Mali](http://en.wikipedia.org/wiki/Mali) is looking forward an election in about 6 weeks, following an historical cluster fuck of rebellion, *sharia war*,  military coup and other funny twists.

We recently heard that some responsible Malians have created an organization to work toward improving the participation, the public knowledge and the overall quality of the upcoming elections **and beyond**. Named **<abbr title="You guessed right, it means SOS Democracy">SOS Démocratie</acronym>**, they are currently running a crowd-funding campaign which **you should support** because they are plain awesome. [Go give some money or learn more about the project](http://sosdemocratiemali.org/).

Naturally, we proposed to assist them with any ICT/technical assistance they might need ; especially knowing that they were considering using [Ushahidi](http://http://www.ushahidi.com/)

### What can we do, ICT-wise, to help?

After a quick discussion with the staff (meaning the *leaders* here, nobody gets a dime), we identified the following:

* They have no ICT skills (though the staff is very tech-communication-savvy).
* We are running out of time.
* Mali is wide (about 20,000 voting bureau).
* They have *non-technical* volunteers.
* Their main focus is on sensitization and information.
* They have no money.

Based on those fact, we proposed to implement the following:

* An hotline for the broad public to **ask any question for free** about the elections, the process to get registered, democracy itself. etc.
* An Ushahidi website with SMS support to report any incident from now (pre-campaign) to post-elections.

### How do we do it?

#### Warming up the line

What does *Hotline* means to you? What do you picture? A room full of exhausted people with headsets, in front of computer screens?

Obviously, this is not where we want to go. Yet, we know that it will cost a little money. The trick here being to spend the least possible while making the system the most usable and keeping some flexibility. Also, our own time is very limited since also have full-time jobs and the staff wants it all up quickly so they can advertise it during the weekly community meetings.

When it comes to build a communication system and selecting tools the first question is “How much communication should it handle?” and we have no answer for that and can't have one because, *nobody knowns* how much people will respond to this since it has never been done. Also, it's still unclear how much publicity the system will get. In a word, it should be able to handle no-to-high demand.

##### Challenges

###### No investment, no partnership

One of the commitment we made was to not require any large upfront investment nor partnerships with telcos. Not for political reasons, but because they are expensive, **very greedy**, slow-starting and requires a lot of administrative clutter.

###### Promotion is tough

Promoting a phone service is very difficult. Since the organization targets the public at large, it's even more difficult. Obviously, the hotline target is the people who are not online, where they can already get informations, but the immense majority of others.

There are 3 main ways to get to those people:

* **Physically**. This is obviously limited and expensive but they'll do it with the regular community events.
* **Radio**. Mali has a dense community radio coverage but its audience is mostly the elders while the strategic stake of this election is the youth (46% of the population is aged 25 or less).
* **TV**. The best medium for this task but out reach due to its cost.

Due to the inherent nature of those communication, the easiest to remember, the better. We thus chose to go with two lines, one per operator with *somewhat readable numbers*.

###### People shouldn't pay

Malians are poor as you would have guessed and given the success of the 100F (20¢) airtime top-up amount, the price of an SMS (5¢) might just be too much *just asking about that so-called democracy thing*.

We thus decided that people will interact with the system in every (free) possible ways:

* By **ringing a phone line**
* By sending a **can you call me back?** USSD request
* By sending a **can you top-up my account?** USSD request
* By **sending an SMS**. That would need payment but each operator *offers bonuses* which are free SMS to same network

Additionally, to make sure that people can send those requests and benefit from operator bonuses, we use **two phone lines, one per operator**.

###### Hotline should be able to scale

Since we want to handle super-low-traffic to no-idea-how-much higher traffic, we decided that the *calls/events* would not be directly handled by humans but by a machine and humans would account each request and human volunteers would call them back later.

It means that the Hotline is **asynchronous** which might be considered a downside but it comes with advantages:

* We can handle dozens of requests per minute.
* We can have a small or large number of volunteers.
* Scale of requests has no incident on cost (only callbacks cost)

###### System should be easy for Volunteers

Volunteering for the Hotline is not easy, and you don't get paid so we figured we should make that experience the least bothering.

For this reason, we want to be able to have a large pool of volunteers who might dedicate a couple of hours from time to time. Most of them would have no specific skills.

So, each volunteer is given a cheap, basic phone with units on it along with a paper sheet to account each call in.

<p class="text-center"><img src="/images/blog/hotline_fiche-suivi-sample.png" title="Sample of Hotline Calls Sheet" alt="Hotline Calls Sheet" /></p>

It contains basic call informations: number called, date/time and topics but also optional informations like gender, age, localization which we might use in the future for stats and to improve the response-flow.

On a **periodic basis**, the volunteer connects to a web page, where it can grab new numbers to call. The first volunteer to get in there gets the numbers and they are flagged as *treated* immediately.

<p class="text-center"><img src="/images/blog/hotline_get-numbers.png" title="Volunteer fetching numbers: only one at that time" alt="Hotline Volunteer Screenshot" /></p>

They can connect to this website from anywhere but for the sake of organization & security, the staff decided that volunteers would probably be stationed at Jokkolabs when on duty.


#### Ushahidi

The other piece of our assistance was setting up Ushahidi, the famous crowd-source data collecting web site/map from Kenya. It was a breeze to install although there were a few glitches.

We hooked-it up with SMS, using the same phone numbers as the Hotline, still, to keep promotion easy and to save a few bucks.

We ended up adding an *SMS triage* feature to the Hotline website to easily assign ambiguous messages to either the Hotline or Ushahidi: we consider ultra short messages to be Hotline requests and long ones to be Ushahdi by default.

<p class="text-center"><img src="/images/blog/hotline_sms-triage.png" title="Volunteer triaging SMS: only one at that time" alt="Hotline Volunteer Screenshot" /></p>

### Non-tech duties

If you read all this, you would believe that setting up such services is a tech-only effort ; well, it's note. A couple of things are required to be done:

* **An Hotline guide for the volunteers**. How to respond to each question ? How to make calls shorter while still delivering the best answer? Being good at online is a skill which we don't want to teach, but a couple of right directions will help callers get satisfied while keeping the costs down.
* **An Ushahidi reports verification procedure**. Ushahidi asks you to *confirm* or *accept* any incoming report. Knowing how & which report to accept is very tedious and depends a lot on your environment. Ushahidi platforms, for events like this one could be a main source of informations for the diaspora and validating false information can have very unpleasant consequences.
* **Communication**. Promoting the phone lines, the services and the Ushahidi is **way more work** than setting it up and shouldn't be taken lightly. Hopefully, SOS already has a communication group which will take care of it.


### Technically

<img src="/images/blog/hotline_ringsync.jpg" title="RingSync, the android app to forward missed calls." alt="Android Software Screenshot" class="imgside" />

Technically, the overall setup is very cheap ; yet it required some programming skills which were absent from the group (see conclusion bellow). We had to write a small Android App and a Django website & service to handle, store, forward and account the requests.

Complete Setup:

* A used, dual-sim, <abbr title="About $60 with shipping">Chinese</abbr> Android phone (with a partially broken screen)
* 2 prepaid SIM cards with nice-looking numbers.
* [SMSSync](http://smssync.ushahidi.com/) software on the Android to forward incoming SMS to a URL.
* A custom Android App that watches the Call Log and forwards missed calls to an URL.
* A custom Django App to:
    * Acknowledge & store requests from SMSSync.
    * Acknowledge & store requests from RingSync (new Android App).
    * Web site for volunteers: pick-up numbers & SMS triage.
    * Forward Ushahidi requests to the online Ushahidi.
    * Send notifications.
* An existing server on which the Django App was setup.
* Some devel time.

The source code written for this is available on Github, in Public Domain:

* [RingSync](https://github.com/jokkolabs/ringsync), the Android App
* [hotline_dispatch](https://github.com/jokkolabs/hotline_dispatch), the Django App

### Cost Summary

Bellow is a list of each of the costs involved. For the sake of simulation, we imagined a total of **1,000 requests** made to the Hotline, followed by an average of **2mn/call**.

<table class="table table-striped"><tr><th>Item</th><th>Unit Cost</th><th>Quantity</th><th>Total</th></tr>
<tr><td>Server SIM card</td><td>$4</td><td>2</td><td>$8</td></tr>
<tr><td>Volunteer phone (1 per volunteer)</td><td>$20</td><td>2</td><td>$40</td></tr>
<tr><td>Volunteer SIM car (1 per volunteer)</td><td>$1</td><td>2</td><td>$2</td></tr>
<tr><td>Server units (SMS is 5¢)</td><td>5¢</td><td>1,000</td><td>$50</td></tr>
<tr><td>Volunteer units (1mn is 22¢)</td><td>22¢</td><td>2,000</td><td>$440</td></tr>
<tr><td colspan="3"><strong>Grand Total</strong></td><td><strong>$540</strong></td></tr>
</table>

### Conclusion

I wish I wouldn't have had to do this myself. I dream of the day when, like in those Cyberpunk novels I used to read, *everybody* has programming skills, just like everybody knows how to read, write or talk (yes, we're not even there yet!).

This is not science fiction, it's the future. Open Data is at its very beginning but so promising! Piece by piece, the tons of data generated at any moment everywhere will be available to all (well, those who has the capability to deal with it).

*<abbr title="Yes, it's that easy.">Week-end hacking</abbr>* like this Hotline setup should be at hand for all, but today, in Mali, it's not easy to find someone who can do it at all. This is a major issue, especially considering the fact that every day puts us a little more into the global market. We **urgently need** every <del>student</del>schoolchild to learn how to write code.

SOS Democracy works toward a better understanding of democracy and election ; in other words, its goal is to improve the knowledge of the broad public regarding how we are being governed. This is an important first step to change our outdated leaders who doesn't even promise to empower and enlighten people. May I remind you that half of the population is under 25y/o?


A government can not solve the unlimited sources of problems in Mali, but it can educate its people and give them tools and data so they can help themselves and fixes the problems at the local level.

If the Internet and Wikipedia has though me one thing, it's that individuals talking to each other are capable of greater work than any organization.

