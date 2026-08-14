---
layout: post
title: Coding Period Week 11
date: 2026-08-14
published: true
description: LiDAR detection setup and dataset adapter tests
tags: gsoc robotics perceptionmetrics lidar detection datasets tests
categories: gsoc
---

This week I worked mainly on the initial setup for LiDAR detection support in PerceptionMetrics. I also worked on tests for the dataset adapters, so that the dataset loading logic can be checked without needing the full real datasets every time.

## LiDAR Detection Setup

I started preparing the structure for LiDAR detection. The work was based on the exploration I had done earlier with KITTI and nuScenes 3D detection data.

The main part of this was adding the initial skeleton for LiDAR detection in the PyTorch detection framework. This included a LiDAR detection torch dataset wrapper and a placeholder model class for future LiDAR detection models.

The idea is similar to the existing image detection structure, but the data format is different. Image detection works with 2D boxes, while LiDAR detection needs 3D boxes. For this work, the 3D box format being used is:

```text
x, y, z, dx, dy, dz, yaw
```

where `x, y, z` is the center of the box in the LiDAR frame, `dx, dy, dz` are the box dimensions, and `yaw` is the heading angle.

I also added a placeholder interface for reading LiDAR point clouds in the detection dataset base class. This keeps the structure similar to LiDAR segmentation, where each dataset class is responsible for reading its own point cloud format.

## nuScenes LiDAR Detection Adapter

I also worked on a first nuScenes LiDAR detection dataset adapter.

For nuScenes, the dataset uses tokens and JSON tables instead of simple annotation files. The adapter builds a dataset index from the `LIDAR_TOP` samples and stores:

- the point cloud file path;
- the nuScenes sample data token used to get annotations;
- the split name.

One important point was that nuScenes annotations are stored in the global scene frame. For detection models and visualization, the boxes need to be in the LiDAR sensor frame. To handle this, I used the official nuScenes helper which returns boxes transformed into the selected sensor frame.

The adapter currently reads the point cloud as `x, y, z, intensity`. The extra ring index stored by nuScenes is dropped so that the format stays consistent with the other LiDAR work.

The labels are stored as numeric class IDs, while the class names remain available through the ontology. This follows the same pattern used by the existing image detection and segmentation datasets.

## Dataset Adapter Tests

I also worked on tests for four dataset adapters:

- Cityscapes;
- nuImages;
- SemanticKITTI;
- nuScenes LiDAR detection.

The tests focus on the main dataset-building behavior instead of using the full datasets. For example, filesystem calls are patched so that the tests can simulate dataset files and labels without needing large real downloads.

This helps check that:

- dataset rows are created correctly;
- sample names and split names are assigned correctly;
- labels or annotations are connected to the right samples;
- missing labels are handled properly;
- ontology information is created or loaded as expected.

These tests should make it easier to catch regressions when dataset loading code is changed later.

## Next Steps

The LiDAR detection work is still at the setup stage. The next steps are to connect the skeleton to an actual LiDAR detection backend, most likely MMDetection3D, and then decide how the 3D detection metrics should be handled inside PerceptionMetrics.
