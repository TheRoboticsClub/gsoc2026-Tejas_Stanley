---
layout: post
title: Final Report
date: 2026-08-21
published: true
description: Final report for Google Summer of Code 2026 with JdeRobot and PerceptionMetrics
tags: gsoc robotics perceptionmetrics final-report datasets gui tutorials tests
categories: gsoc
---

# PerceptionMetrics: Dataset Support, GUI Extensions, Tutorials, and Tests

---

Organization: [JdeRobot](https://jderobot.github.io/)

Contributor: Tejas Stephen Stanley

GSoC Project Page: [ PerceptionMetrics dataset support, GUI extensions, tutorials, and tests
](https://summerofcode.withgoogle.com/programs/2026/projects/1lzN79bZ)

Mentors: David Pascual and Sakhineti Praveena

---

Hello everyone,

This report summarizes my Google Summer of Code 2026 work with JdeRobot on [PerceptionMetrics](https://jderobot.github.io/PerceptionMetrics/). Over the summer, I worked on improving dataset support, extending the GUI for image and LiDAR segmentation, preparing tutorials and documentation, and adding tests to make the project more robust.

---

## About Me

I am Tejas Stephen Stanley, a Master's student in Robotics at TU Delft. This summer, I had the opportunity to contribute to JdeRobot through Google Summer of Code 2026.

Before starting the project, I had worked with robotics and perception systems, but this project helped me understand model evaluation workflows in much more depth. Working on PerceptionMetrics gave me experience with dataset adapters, ontology handling, model evaluation, GUI development, documentation, and testing in an open-source project.

---

## Project Summary

[PerceptionMetrics](https://jderobot.github.io/PerceptionMetrics/) is a toolkit for evaluating perception models across frameworks and datasets. Past GSoC projects ([Vinay Sharma, 2017](https://github.com/TheRoboticsClub/2017-colab-vinay_sharma), [Jeevan Kumar, 2019](https://theroboticsclub.github.io/colab-gsoc2019-Jeevan_Kumar/)) contributed to its first stable release, published in Sensors ([Paniego et al., 2022](https://doi.org/10.3390/s22124575)). Recently, the tool has been revamped to support LiDAR, image segmentation, and object detection ([Sakhineti Praveena, 2025](https://github.com/TheRoboticsClub/gsoc2025-Sakhineti_Praveena)).

My project focused on continuing this work by adding support for more perception datasets, improving the GUI so that it can handle more tasks, and creating tutorials and tests that make the project easier to use and maintain.

The main goals were:

- Exploring core segmentation and detection datasets used in industry and research for image and LiDAR perception, such as Cityscapes, nuImages, and SemanticKITTI, then prioritizing and adding support for them.
- Extending the GUI to support image and LiDAR segmentation visualization, since the GUI was previously focused mainly on object detection.
- Generating tutorials and documentation for different use cases, models, and data formats.
- Improving the robustness of the project through a better test suite.

---

{% include video.liquid path="/assets/video/perception_metrics_final_ppt.mp4" controls=true width="100%" %}

---

## Contribution Summary

### 1. Dataset Support

The first major part of the project was working on dataset adapters. I started with Cityscapes and then moved to SemanticKITTI.

For Cityscapes, I worked on the image segmentation adapter. This helped set up the pattern for evaluating image segmentation datasets through PerceptionMetrics.

For SemanticKITTI, I added support for LiDAR semantic segmentation. This included loading point cloud `.bin` files, matching them with `.label` files, reading the SemanticKITTI ontology, and preparing the dataset for evaluation.

The main dataset-related pull requests were:

- Cityscapes dataset adapter: [JdeRobot/PerceptionMetrics#577](https://github.com/JdeRobot/PerceptionMetrics/pull/577)
- SemanticKITTI dataset adapter: [JdeRobot/PerceptionMetrics#588](https://github.com/JdeRobot/PerceptionMetrics/pull/588)

### 2. Segmentation Tutorials and Evaluation Workflow

Another important part of the project was preparing tutorials for the supported datasets. The goal was not only to add dataset classes, but also to make the full workflow understandable for users.

I worked on tutorials for:

- [Cityscapes image segmentation](https://github.com/JdeRobot/PerceptionMetrics/blob/master/examples/tutorial_cityscapes_image_segmentation.ipynb);
- [nuImages image segmentation](https://github.com/JdeRobot/PerceptionMetrics/blob/master/examples/tutorial_nuimages_segmentation.ipynb);
- [SemanticKITTI LiDAR segmentation](https://github.com/JdeRobot/PerceptionMetrics/blob/master/examples/tutorial_semanticKITTI_lidar_segmentation.ipynb).

While working on the tutorials, I also explored how evaluation should work when the model labels and dataset labels do not directly match. Earlier workflows often required exporting the dataset into the model ontology first. During this project, I worked with ontology translation files so that evaluation can be done more directly.

This helped make the tutorials cleaner and reduced the need for extra dataset export steps in cases where label IDs differ.

Related pull requests:

- Cityscapes tutorial: [JdeRobot/PerceptionMetrics#580](https://github.com/JdeRobot/PerceptionMetrics/pull/580)
- SemanticKITTI tutorial: [JdeRobot/PerceptionMetrics#590](https://github.com/JdeRobot/PerceptionMetrics/pull/590)
- nuImages segmentation tutorial: [JdeRobot/PerceptionMetrics#599](https://github.com/JdeRobot/PerceptionMetrics/pull/599)
- Segmentation evaluation and tutorial updates: [JdeRobot/PerceptionMetrics#605](https://github.com/JdeRobot/PerceptionMetrics/pull/605)

### 3. GUI Extensions

The GUI was another major part of the project. At the start, the GUI was mainly structured around image object detection. During the project, I worked on extending this structure so that image segmentation and LiDAR segmentation could also fit into it.

For image segmentation, I worked on:

- task-specific sidebar inputs;
- Cityscapes and nuImages dataset viewer support;
- image grid selection;
- mask overlay visualization;
- model loading for SegFormer-based workflows;
- inference visualization;
- evaluator tab support using PerceptionMetrics `model.eval()`.

For LiDAR segmentation, I worked on:

- SemanticKITTI dataset loading in the GUI;
- point cloud visualization using Plotly;
- coloring points by semantic label or intensity;
- class color tables;
- frame selection;
- inference visualization;
- evaluator tab support;
- controls for point size, maximum points, and intensity clipping.

The GUI work made the application more task-based. Instead of forcing all tasks through one object detection flow, each task can now have its own sidebar and tab logic while still sharing the same main Dataset Viewer, Inference, and Evaluator structure.

Related pull request:

- Image segmentation GUI: [JdeRobot/PerceptionMetrics#609](https://github.com/JdeRobot/PerceptionMetrics/pull/609/)
- LiDAR segmentation GUI: [JdeRobot/PerceptionMetrics#618](https://github.com/JdeRobot/PerceptionMetrics/pull/618)

### 4. GUI Tutorials and Documentation

I also worked on documentation and tutorial material for the GUI. Since the GUI now supports multiple tasks, the documentation needed to be updated to explain the task-based workflow.

I prepared video tutorials for:

- image detection GUI;
- image segmentation GUI;
- LiDAR segmentation GUI.

The videos were prepared using Canva with text-to-speech narration, so that each GUI step can be followed clearly. I also updated the GUI documentation page to include the tutorial videos and updated the dataset documentation with supported datasets and dataset links.

Related pull request:

- Documentation updates: [JdeRobot/PerceptionMetrics#602](https://github.com/JdeRobot/PerceptionMetrics/pull/602)

### 5. Tests

In the final part of the project, I worked on improving the test suite.

I added tests for dataset adapters such as:

- Cityscapes;
- nuImages;
- SemanticKITTI;
- nuScenes LiDAR detection exploration.

I also worked on GUI tests using Streamlit's `AppTest`. These tests check that the GUI renders correctly, sidebar controls update session state, tiny fake datasets can be loaded, and dataset viewer and evaluator tabs respond as expected.

This work is important because the GUI now has more task-specific behavior. The tests make it easier to catch regressions when the GUI or dataset loading logic changes in the future.

Related pull request:

- Dataset and GUI tests: [JdeRobot/PerceptionMetrics#627](https://github.com/JdeRobot/PerceptionMetrics/pull/627)

---

## On GitHub

Over the summer, I worked on several pull requests covering dataset adapters, tutorials, GUI support, documentation, and tests. The main pull requests are grouped below week by week. Some pull requests appear in more than one week because the same work continued across review, cleanup, and follow-up changes.

| Week | Pull Request | Description |
| --- | --- | --- |
| Week 1 | [#577](https://github.com/JdeRobot/PerceptionMetrics/pull/577), [#580](https://github.com/JdeRobot/PerceptionMetrics/pull/580) | Cityscapes image segmentation dataset adapter and tutorial notebook. |
| Week 2 | [#588](https://github.com/JdeRobot/PerceptionMetrics/pull/588), [#590](https://github.com/JdeRobot/PerceptionMetrics/pull/590) | SemanticKITTI LiDAR segmentation dataset adapter and tutorial notebook. |
| Week 3 | [#599](https://github.com/JdeRobot/PerceptionMetrics/pull/599), [#602](https://github.com/JdeRobot/PerceptionMetrics/pull/602) | nuImages image segmentation tutorial and documentation pages for datasets, models, and metrics. |
| Weeks 4-5 | [#599](https://github.com/JdeRobot/PerceptionMetrics/pull/599), [#605](https://github.com/JdeRobot/PerceptionMetrics/pull/605) | Continued nuImages tutorial updates and segmentation evaluation changes using ontology translation. |
| Week 6 | [#609](https://github.com/JdeRobot/PerceptionMetrics/pull/609), [#618](https://github.com/JdeRobot/PerceptionMetrics/pull/618) | Started image segmentation GUI support and SemanticKITTI point cloud viewer experiments. |
| Week 7 | [#618](https://github.com/JdeRobot/PerceptionMetrics/pull/618) | Added LiDAR segmentation dataset viewer, inference, and evaluator work. |
| Week 8 | [#609](https://github.com/JdeRobot/PerceptionMetrics/pull/609) | Cleaned up image segmentation GUI after review comments. |
| Weeks 9-10 | [#609](https://github.com/JdeRobot/PerceptionMetrics/pull/609), [#618](https://github.com/JdeRobot/PerceptionMetrics/pull/618) | Incorporated recent image detection GUI changes into the image segmentation and LiDAR segmentation GUI branches. |
| Week 11 | [#627](https://github.com/JdeRobot/PerceptionMetrics/pull/627) | Dataset adapter tests, including Cityscapes, nuImages, SemanticKITTI, and nuScenes exploration. |
| Week 12 | [#602](https://github.com/JdeRobot/PerceptionMetrics/pull/602), [#627](https://github.com/JdeRobot/PerceptionMetrics/pull/627) | Final documentation updates, GUI videos, dataset links, support tables, and Streamlit GUI tests. |

---




## Future Work

There are several directions in which this work can be continued:

1. **Complete LiDAR detection support**

   I started exploring LiDAR detection with KITTI, nuScenes, and MMDetection3D. This is useful future work, but it was outside the original GSoC proposal, so it should be completed separately after the program.


2. **Improve model support in the GUI**

   The GUI can be extended to support more model formats and backends, especially for segmentation and LiDAR workflows.


3. **Expand tests**

   The dataset and GUI tests can be extended further as more datasets and model types are added.

---

## Conclusion

Google Summer of Code 2026 with JdeRobot was a very valuable experience for me. I started by working on dataset adapters and gradually moved into tutorials, GUI development, testing, and documentation.

This project helped me understand how perception evaluation tools are built across different datasets, model frameworks, and data formats. It also taught me how important good tutorials, documentation, and tests are for making an open-source project usable by others.

I am especially thankful to my mentors, David Pascual and Sakhineti Praveena. They were very helpful throughout the project, reviewed my pull requests thoroughly, and helped me improve my workflow and understanding of testing, vision models, and evaluation pipelines. The project had a very positive environment, which made it easier to learn, ask questions, and keep improving the work.

I am also grateful to the JdeRobot community for the opportunity and support. I plan to continue contributing to PerceptionMetrics after GSoC, especially around LiDAR detection and further GUI improvements.

Thank you for following my GSoC journey.
