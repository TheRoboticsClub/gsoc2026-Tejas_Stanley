---
layout: post
title: Coding Period Week 8
date: 2026-07-17
published: true
description: Image segmentation GUI updates and review changes
tags: gsoc robotics perceptionmetrics gui segmentation cityscapes nuimages
categories: gsoc
---

This week I continued working on the image segmentation part of the PerceptionMetrics GUI. The main focus was to clean up the implementation after review comments and make the dataset viewer, inference tab, and evaluator tab easier to maintain.

The image segmentation GUI had already been started with Cityscapes and nuImages. This week was mostly about improving that work so that the structure is cleaner and can be extended to more datasets later.

## Pull Request

The main pull request related to this work is:

- Image segmentation GUI: [JdeRobot/PerceptionMetrics#609](https://github.com/JdeRobot/PerceptionMetrics/pull/609/)

## Dataset Viewer Cleanup

One of the main review comments was that the dataset viewer should not have a separate rendering function for every dataset. The loading logic can be different for Cityscapes and nuImages, but once the dataset is loaded, the viewer should render it in the same way.

Earlier, the viewer had separate branches for Cityscapes and nuImages. I changed this so that the main viewer function loads the selected dataset and then passes it to a common display function.

The common display function now handles:

- sample grid rendering;
- sample selection;
- mask opacity control;
- image and ground-truth overlay display;
- class table display.

This keeps the dataset-specific part smaller. Cityscapes and nuImages still have their own dataset-loading details, but the actual viewer logic is shared.

## Dataset Loading

The dataset loading was also cleaned up. The GUI now has a common `load_image_segmentation_dataset` function, which selects the correct loader based on the dataset type.

For Cityscapes, the GUI uses:

- dataset path;
- split;
- image directory;
- label directory;
- image suffix;
- label suffix;
- train-ID option.

For nuImages, the GUI uses:

- dataset path;
- split;
- nuImages version;
- generated labels directory.

The loaded datasets are cached in Streamlit session state using a dataset key. This avoids reloading the dataset every time Streamlit reruns the app, while still reloading correctly when the dataset path, split, or dataset-specific settings change.

## Cityscapes Label Handling

Another change was related to Cityscapes color labels. Earlier, the GUI had logic to manually convert RGB color masks into label IDs. This made the viewer more dataset-specific than it needed to be.

The PerceptionMetrics image segmentation dataset base class already supports RGB labels through the `is_label_rgb` option. So I moved this responsibility back to the dataset class path. Now the GUI simply calls:

```python
dataset.read_label(label_fname)
```

This keeps the GUI simpler and makes the dataset class responsible for reading labels correctly.

## Inference and Evaluation

The image segmentation inference tab lets the user upload an image and run prediction using the loaded segmentation model. The prediction is colorized using the model ontology and shown with an overlay, similar to the tutorial workflow.

The evaluator tab uses the PerceptionMetrics `model.eval()` path. It supports ontology translation, which is needed when the model label IDs and dataset label IDs do not directly match.

I also reused the dataset-loading logic from the dataset viewer in the evaluator to avoid duplicating the Cityscapes and nuImages dataset construction code.

## Next Steps

The next step is to finish addressing any remaining review comments for the image segmentation GUI PR and then extend the same structure to more image segmentation datasets. After this, the GUI documentation also needs to be updated because the GUI is now task-based rather than only image-detection focused.
