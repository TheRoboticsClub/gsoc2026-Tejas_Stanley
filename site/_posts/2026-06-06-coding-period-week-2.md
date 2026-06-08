---
layout: post
title: Coding Period Week 2
date: 2026-06-06
published: true
description: Implementing the SemanticKITTI dataset adapter and preparing the tutorial with MMDetection3D and PerceptionMetrics
tags: gsoc robotics perceptionmetrics semantickitti lidar
categories: gsoc
---

The second week of the coding period focused on adding SemanticKITTI support to PerceptionMetrics and preparing a tutorial around it. After studying the dataset structure last week, I started implementing a dataset adapter and building a workflow for loading LiDAR point clouds, reading semantic labels, running model inference through MMDetection3D, and using the results with PerceptionMetrics.

## SemanticKITTI Dataset Adapter

This week, I worked on the SemanticKITTI dataset adapter, which is tracked in [JdeRobot/PerceptionMetrics#588](https://github.com/JdeRobot/PerceptionMetrics/pull/588). Each SemanticKITTI sample contains a `.bin` point cloud file and a corresponding `.label` file, organized by sequence.

The goal was to make the adapter follow the existing PerceptionMetrics dataset structure while correctly handling the SemanticKITTI format. I focused on loading point cloud files, matching them with their label files, and preparing dataset entries that can be used by the evaluation pipeline.

I also worked on the SemanticKITTI ontology. This is needed because the raw dataset labels must be mapped to semantic classes before evaluation. For LiDAR semantic segmentation, this step is especially important because labels are stored in an encoded format and need to be decoded before they can be compared with predictions.

## SemanticKITTI Tutorial

Alongside the adapter, I started preparing the SemanticKITTI tutorial, which is tracked in [JdeRobot/PerceptionMetrics#590](https://github.com/JdeRobot/PerceptionMetrics/pull/590). The tutorial explains how to set up the dataset, load samples through the adapter, inspect the ontology, run inference, and prepare the data for evaluation.

It also documents the dataset structure and explains how point clouds and labels are paired. This is useful because SemanticKITTI is less straightforward than many image segmentation datasets, especially for users who are new to LiDAR semantic segmentation.

Writing the tutorial while developing the adapter helped test the workflow from a user perspective. Parts that were unclear in the tutorial often pointed to areas where the adapter or documentation needed improvement.

## Using MMDetection3D

For the tutorial, I used MMDetection3D as the model-side framework for SemanticKITTI. MMDetection3D provides existing support for 3D perception models, pretrained configurations, and LiDAR semantic segmentation workflows. This allowed the tutorial to go beyond dataset loading and show how the adapter can be used in a practical model inference workflow.

I explored how to load a SemanticKITTI-compatible model from MMDetection3D, run inference on point cloud samples, and connect the predicted semantic labels back to the PerceptionMetrics workflow. In this setup, the adapter provides the dataset structure and ontology, while MMDetection3D provides model predictions that can later be evaluated using PerceptionMetrics.

This also helped identify the information that needs to stay aligned between the two libraries: point cloud data, predicted labels, ground-truth labels, and class mappings.

The tutorial now shows a complete workflow where users can load data with the PerceptionMetrics adapter, use MMDetection3D for inference, and prepare the outputs for evaluation.

## Challenges

The main challenge this week was correctly handling the SemanticKITTI format. The dataset uses sequence-based folders, binary point cloud files, and encoded label files, so the adapter needs to handle file matching and label decoding carefully.

Another challenge was deciding what should be part of the adapter and what should remain in the tutorial or future model integration work. For now, I kept the adapter focused on loading and organizing the data, while the tutorial explains how to use it with MMDetection3D and PerceptionMetrics.

## Next Steps

Next week, I plan to focus on documentation improvements. This includes refining the documentation for existing adapters, models, functionalities and evaluation workflows existing in PerceptionMetrics. Clear documentation is crucial for making the library accessible to new users.

I also plan to start exploring nuImages model training. This will help prepare for the next stage of dataset and model integration work, especially for understanding which pretrained or trainable models can be used with nuImages and how they can fit into the PerceptionMetrics evaluation pipeline. 

Another goal is to check the feasibility of using Vispy for point cloud visualization in the tutorial. This will be important for showing users how to visualize SemanticKITTI point clouds and predicted labels effectively. Comparing Vispy with Open3D will help determine the best approach for visualization in the tutorial.