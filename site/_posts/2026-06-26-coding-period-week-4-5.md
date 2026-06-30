---
layout: post
title: Coding Period Weeks 4 and 5
date: 2026-06-26
published: true
description: Improving segmentation evaluation with ontology translation and starting the PerceptionMetrics GUI task refactor
tags: gsoc robotics perceptionmetrics gui segmentation cityscapes nuimages semantickitti
categories: gsoc
---

During weeks 4 and 5 of the coding period, I worked on two main things in PerceptionMetrics. First, I looked at how segmentation evaluation can work when the model labels and dataset labels do not directly match. Second, I started refactoring the GUI so image detection, image segmentation, and LiDAR segmentation can be handled as separate tasks.

This work came after the nuImages segmentation tutorial and the SemanticKITTI tutorial from the previous weeks.

I also had to take a one-week leave of absence during this period to complete my exams. I informed my mentors about this in advance, and since the project progress was already ahead of the expected pace, we agreed that this would be manageable without affecting the overall timeline.

## Pull Requests

The main pull requests related to the tutorial updates are:

- nuImages segmentation tutorial: [JdeRobot/PerceptionMetrics#599](https://github.com/JdeRobot/PerceptionMetrics/pull/599)
- Segmentation evaluation and tutorial updates: [JdeRobot/PerceptionMetrics#605](https://github.com/JdeRobot/PerceptionMetrics/pull/605)

## Evaluation and Ontology Translation

I looked at the `eval` function for segmentation models and how it handles different label spaces. Earlier tutorials used the dataset `export` function to store labels in a different ontology before evaluation. This works, but evaluation should not always need a dataset export just because the model and dataset use different label IDs.

While checking this, I found that ontology translation can help avoid this extra export step. Instead of saving another version of the dataset, evaluation can use a translation ontology or lookup table directly.

This is useful for datasets such as:

- nuImages image segmentation
- Cityscapes image segmentation
- SemanticKITTI LiDAR segmentation

In these datasets, the raw dataset labels, train IDs, model output IDs, and ignored classes may differ. The main point is that ontology translation can be used during evaluation, while dataset export is still useful when converted labels need to be saved on disk.

## Starting the GUI Refactor

The other major part of the work was the PerceptionMetrics GUI. The existing GUI had three tabs:

- Dataset Viewer
- Inference
- Evaluator

This worked for image detection, but it would become messy once image segmentation and LiDAR segmentation were added. Each task needs different dataset inputs, model inputs, visualizations, and evaluation options.

To make this easier to extend, I started separating the GUI by task. The structure now moves toward folders like:

```text
tabs/tasks/image_detection/
tabs/tasks/image_segmentation/
tabs/tasks/lidar_segmentation/
```

Each task can then have its own:

```text
sidebar.py
dataset_viewer.py
inference.py
evaluator.py
```

This keeps image detection code separate from segmentation code. It also gives us a cleaner place to add LiDAR visualization and evaluation later.

## Preserving the Image Detection Workflow

Before adding new segmentation behavior, I made sure image detection still behaved like the original GUI. I moved the existing image detection dataset viewer, inference tab, evaluator tab, and sidebar into the new task-specific folder while keeping the implementation close to the original version.

This was important because the GUI refactor should not silently change the existing detection workflow. The goal was to first move the code into a better structure, not redesign everything at once.

The image detection viewer still supports COCO and YOLO-style datasets. The sidebar remains responsible for dataset selection, model loading, configuration, and evaluation parameters.

## Image Segmentation Dataset Viewer

After the task split, I started implementing the image segmentation side with Cityscapes first. Other datasets such as nuImages, Wildscenes, RUGD, Rellis3D, and GOOSE are still planned, but Cityscapes was a good starting point because the tutorial already gives a clear reference workflow.

The first implemented part was the Cityscapes dataset viewer. It loads a Cityscapes dataset using the dataset root, split, image directory, label directory, image suffix, label suffix, and train-ID option from the sidebar.

It then displays samples and overlays the ground-truth segmentation mask on the image. This helped check that the GUI can read the same Cityscapes structure used in the tutorial.

I also added a shared image grid utility for the GUI. The image detection viewer already had a paginated grid with search, and the image segmentation viewer needed the same behavior. Instead of duplicating it, I moved the grid code into a shared utility.

This shared grid handles:

- pagination;
- search by sample name;
- image thumbnail selection;
- Streamlit session-state keys for each task.

The detection and segmentation viewers can now reuse the same grid while keeping their task-specific rendering separate.

## Challenges

The main challenge during these weeks was avoiding unnecessary duplication without over-abstracting too early. The GUI needs shared pieces, such as the image grid, but the actual task behavior should stay separate. Image detection, image segmentation, and LiDAR segmentation should not be forced into one generic viewer because their data and visualizations are different.

Another challenge was understanding where ontology translation should happen. Exporting datasets to a new ontology is still useful, but evaluation can also use the translation directly when converted labels do not need to be stored.

## Next Steps

The next step is to continue the image segmentation GUI work by implementing the inference tab and evaluator tab for Cityscapes. This should follow the tutorial pattern by using a `TorchImageSegmentationModel`, a model configuration file, and an ontology file.

After that, I plan to add image segmentation evaluation support in the GUI. Once the Cityscapes flow is working end to end, the same structure can be extended to other image segmentation datasets and later to LiDAR segmentation. I will also be exploring how to view open3d point clouds in the GUI for LiDAR segmentation.
