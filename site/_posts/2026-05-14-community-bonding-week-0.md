---
layout: post
title: Community Bonding Week 0
date: 2026-05-14
published: true
description: Setting up the blog, meeting mentors, and exploring Cityscapes
tags: gsoc robotics perceptionmetrics cityscapes
categories: gsoc
---

The first week of the GSoC community bonding period has mainly been focused on getting everything set up and becoming more familiar with the project workflow and datasets.

## Meeting the Mentors

This week, I had discussions with the mentors regarding the overall direction of the project, expectations for the coding period, and the planned milestones for the upcoming weeks.

## Setting Up the Blog

I also spent some time setting up this blog using the al-folio Jekyll theme and GitHub Pages. Since this is my first time maintaining a project blog in this format, there was a bit of debugging involved with GitHub Actions, deployment configuration, and asset management.

The website is now live and will be used to document weekly progress throughout Google Summer of Code 2026.

## Exploring the Cityscapes Dataset

Another major part of this week involved exploring the Cityscapes dataset and understanding how semantic segmentation annotations are organized.

I spent some time understanding:

- Dataset directory structure
- labelIds and trainIds
- Semantic segmentation masks
- Visualization pipelines
- Mapping RGB images to corresponding annotations

I also began writing utilities for loading images and their corresponding segmentation labels, which will later help during integration into PerceptionMetrics.

## Next Steps

For the next week, the plan is to:

- Continue understanding the PerceptionMetrics codebase
- Explore dataset adapter implementations
- Begin integrating additional dataset support
- Start experimenting with evaluation workflows and metrics