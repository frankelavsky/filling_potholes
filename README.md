# filling_potholes

Note: there is a [full write-up for this project on my blog](https://www.frank.computer/blog/2024/04/filling-potholes.html).

In realspace, communities can come together to take action to repair the world around them. In Portland, [anarchists took action and began filling potholes](https://www.bloomberg.com/news/articles/2017-03-15/portland-anarchist-road-care-fixes-potholes-anonymously) that the city had continued to neglect. While the anarchists had a minor impact in the scale of potholes they filled (they only claimed to have fixed 5 total), they [pressured municipal officials to host a "patch-a-thon"](https://www.portland.gov/transportation/news/2017/2/24/news-release-pbot-launches-patch-thon-address-potholes-caused-winter) that resulted in more than 1000 fixed potholes.

But in digital spaces, like on the web, we might "share" social media content with each other. However, we don't share the same material infrastructure in the same way realspace is shared. As the anarchists in Portland identified, ["coercive hierarchies" can often prevent direct action and repair in times of need](https://www.oregonlive.com/commuting/2017/03/why_portland_anarchists_are_pa.html).

If someone "repairs" a website, to make it more accessible for people with disabilities for example, those changes to the HTML, CSS, or JavaScript only persist for that person and during that session. If they reload their webpage, they get the same page infrastructure dished up to them from a server as everyone else would. All the labor of that repair is lost in an instant.

The web's technological infrastructure is governed by careful control of codebases, each managed and maintained by different organizations, communities, and companies. Even an "open source" website still regulates who can make changes to the code that lives on a server.

But if the current status quo of sociotechnical governance continues to fail people with disabilities - shouldn't it be time to fill the potholes of the web, like the Portland anarchists eventually did?

This is a browser extension that explores the idea that edits and repairs to broken and inaccessible infrastructure can be shared across sessions and users, so long as they all share the same extension. This is just a prototype that uses static changes to a single website, so that we could get validation and feedback from folks with disabilities on the idea first.

Our future goals would involve keeping track of changes on a server, intelligently managing identical assets (such as alt text for the same images) that might crop up in different locations, socially moderating and reviewing the changes made by others, automatically sending reports and github tickets to the owners of the original code being repaired, handling of multiple attempts at repair (such as different people authoring alt text for the same image), as well as a feedback system that people can give to other repairers and the codebase owners.

The technology used for this idea is inspired by two separate research projects: first is the idea of "[ambient co-presence](https://maggieappleton.com/ambient-copresence)." Here, we are exploring an ambient co-repair, where the vestiges and lingering traces of others aren't just ghostlike or aesthetic, but rather people leave their mark through the subtle and careful repair of the shared digital spaces we inhabit. The other idea is inspired by a project from CSCW where users had a browser extension and could [change the headlines on news articles to fix sensationalized and click-baity language](https://dl.acm.org/doi/10.1145/3555643) into something factual or more reasonable.
