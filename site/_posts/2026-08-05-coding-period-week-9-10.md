---
layout: post
title: Coding Period Week 9-10
date: 2026-08-05
published: true
description: GUI tutorial preparation and LiDAR detection exploration
tags: gsoc robotics perceptionmetrics gui segmentation lidar detection tutorials
categories: gsoc
---

During these two weeks, I worked on preparing the GUI tutorials, incorporating recent GUI review changes, and starting the LiDAR detection exploration. The main focus was to make the GUI easier to explain and test through short tutorial videos, and to understand how KITTI and nuScenes store 3D bounding boxes.

## GUI Tutorial Preparation

One of the main tasks was preparing tutorial material for the GUI. I worked on three GUI tutorials and prepared them in Canva so that they can be used as short videos.

The tutorials are focused on:

- image detection;
- image segmentation;
- LiDAR segmentation.

I prepared the videos in Canva and used text-to-speech so that each step in the GUI can be explained clearly. This should make the tutorials easier to follow, especially for users who are opening the GUI for the first time.

The tutorials cover the basic flow of selecting a task, configuring the dataset and model inputs from the sidebar, viewing dataset samples, running inference, and using the evaluator tab.

## GUI Review Changes

Another part of the work was incorporating the recent image detection GUI changes into the image segmentation and LiDAR segmentation GUI branches.

The image detection PR had updates in the task-based GUI structure, so I had to bring those changes into the other task implementations as well. 

I also worked on finalizing the image segmentation and LiDAR segmentation GUI pull requests for review. This mostly involved cleaning up the implementation, checking that the task-specific sidebars still worked correctly, and making sure the newer image detection changes did not break the segmentation GUI work.

## LiDAR Detection Exploration

I started exploring LiDAR detection as the next possible extension.

For this, I created an exploratory notebook using the local KITTI dataset. The notebook reads the KITTI object detection data, including camera images, Velodyne point clouds, calibration files, and label files.

The notebook includes:

- image visualization with 2D boxes;
- Velodyne point cloud visualization;
- projection of LiDAR points into the camera image;
- counting how many 3D boxes are present per frame;
- Open3D visualization of point clouds with 3D boxes;
- BEV plots for checking boxes from a top-down view.

I also checked how MMDetection3D can be used for KITTI 3D detection. The PointPillars KITTI checkpoint predicts 3D boxes for `Pedestrian`, `Cyclist`, and `Car`.
For nuScenes, I used the official nuScenes devkit because the dataset stores samples, annotations, sensors, calibration, and ego poses through JSON tables and tokens.
