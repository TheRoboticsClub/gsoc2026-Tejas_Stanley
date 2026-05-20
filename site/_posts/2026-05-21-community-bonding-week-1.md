---
layout: post
title: Community Bonding Week 1
date: 2026-05-20
published: true
description: Exploring PerceptionMetrics, Cityscapes, and evaluation workflows
tags: gsoc robotics perceptionmetrics cityscapes
categories: gsoc
---

The second week of the GSoC community bonding period was focused on diving deeper into the PerceptionMetrics codebase, understanding how dataset adapters are implemented, and beginning to experiment with evaluation workflows. My main goal for the week was to understand the existing dataset structure in the project and start preparing the initial support for Cityscapes.

## Exploring PerceptionMetrics

I spent time going through the evaluation pipeline in PerceptionMetrics to understand how datasets, ontologies, predictions, and labels are connected during evaluation. This helped me understand what information a dataset adapter needs to provide and how the data should be formatted before it can be used by the metrics module.

I also looked at the existing GOOSE dataset adapter as a reference. This was useful for understanding the expected structure of dataset dictionaries, ontology dictionaries, and how image-label pairs are collected before being passed to the segmentation dataset wrapper.

## Starting the Cityscapes Adapter

I started integrating support for the Cityscapes dataset by writing an initial adapter for semantic segmentation. The adapter loads Cityscapes images and matches them with their corresponding ground-truth label files based on the standard Cityscapes folder structure.

This involved handling the train, validation, and test splits, building image and label paths, and creating an ontology from the official Cityscapes label definitions. I also worked on making the implementation configurable so that different image and label directories or suffixes can be passed if needed.

## Community Meeting

This week, I also attended a group meeting with the JdeRobot team. During the meeting, we introduced ourselves, discussed the project methodology, and reviewed the expected timelines and outcomes for GSoC.

It was helpful to hear about the broader goals of the organization.

## Next Steps

In the coming week, I plan to continue improving the Cityscapes dataset adapter and test it more thoroughly with the PerceptionMetrics evaluation pipeline. I will also refine the implementation based on feedback from my mentors, clean up the API where needed, and start checking how the adapter behaves with real Cityscapes samples.
