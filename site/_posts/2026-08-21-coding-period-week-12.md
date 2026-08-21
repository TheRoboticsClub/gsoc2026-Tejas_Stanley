---
layout: post
title: Coding Period Week 12
date: 2026-08-21
published: true
description: Final GUI tests, documentation updates, and LiDAR detection exploration
tags: gsoc robotics perceptionmetrics gui tests documentation lidar detection
categories: gsoc
---

This week I focused on finishing the remaining work around the GUI updates and documentation. I also spent some time exploring LiDAR detection, but this is additional work outside the original GSoC proposal, so I plan to continue it after Google Summer of Code ends.

## GUI Tests

One of the main tasks this week was completing tests for the Streamlit GUI. I worked on GUI tests using Streamlit's `AppTest`, so the app can be checked without manually opening the browser each time.

The tests cover the main GUI flow for the supported tasks. This includes checking that the sidebar options are rendered correctly, dataset inputs can be updated, and the dataset viewer and evaluator tabs respond correctly when a small test dataset is loaded.

This should help make future GUI changes safer, because regressions in the task selection, sidebar inputs, dataset viewer, or evaluator page can be caught earlier.

## Documentation PR

I also completed the documentation updates for the GUI. The GUI documentation was updated to match the newer task-based structure, since the GUI now supports more than only image detection.

The documentation now includes the supported GUI tasks and tutorial videos for:

- image detection;
- image segmentation;
- LiDAR segmentation.

I also worked on cleaning up the dataset documentation so that the supported datasets and their links are easier to find.

## LiDAR Detection Exploration

I continued exploring LiDAR detection a little more this week. The work was mainly about understanding how it could fit into the existing PerceptionMetrics structure, especially after the earlier nuScenes and MMDetection3D experiments.

This work is still exploratory. Since LiDAR detection was not part of the original GSoC proposal, I do not want to rush it into the final GSoC scope. The plan is to keep it as follow-up work and complete it properly after the program ends.

## Next Steps

The main remaining work is to get the documentation and GUI test PRs reviewed and merged. After that, I will focus on wrapping up the final GSoC submission and keeping the LiDAR detection work separate as future development.
