---
title: 'Hostility Towards LGBT People in the EU'
excerpt: 'Developing an interactive visualization that displays the levels of hostility towards LGBT people in different European countries.'
coverImage: '/assets/blog/info-vis/info-vis-cover.png'
date: 'Intro to Information Visualization'
# client: 'Matmerize'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/info-vis/info-vis-cover.png'
subheader: 'I worked with a partner and used data from a European Union LGBT Survey to create this visualization. In the survey, Lesbian, Gay, Bisexual, or Transgender people from the EU were asked questions about their perception of daily life for LGBT people in their country. The data is broken down by country and identity of the respondents:'
---

<!-- I worked with a partner and used data from a **European Union LGBT Survey** to create this visualization. In the survey, Lesbian, Gay, Bisexual, or Transgender people from the EU were asked questions about their perception of daily life for LGBT people in their country. The data is broken down by country and identity of the respondents. -->

### We selected the identity, country, and response data for 4 measures of the survey:

  * – Offensive language from politicians
  * – Casual jokes
  * – Expressions of hatred and aversion
  * – Assaults and harassment

### Rationale for *choropleth map*:
* – It provides an overview of the data and effectively displays the differences in responses across different EU countries.
* – We used a Lambert Conformal Conic projection to **minimize distortion** of the map.
* – We decided to use a moderately generalized GeoJSON to **minimize file size and increase performance**, while maintaining clear country outlines.
* – We normalized the data based on the number of question buttons selected to **emphasize the difference between countries**.

### Rationale for *stacked bar chart*:
* – It is appropriate for discrete and ordinal data.
* – In the survey, the response data was normalized by identity (i.e. the percentages of different responses for Lesbian respondents added up to 100%). We preserved this normalization in the stacked bar chart because we wanted to **emphasize the part-to-whole relationship** of the different types of responses within a given identity.
* – The stacked bar chart only shows data for a selected country (instead of the average values for all countries) because we wanted to allow the user to access **details on demand**.
