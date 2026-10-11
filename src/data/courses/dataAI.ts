import { Course } from '../../types';

export const dataAICourses: Course[] = [
  {
    id: 'data-science',
    title: 'Data Science',
    category: 'Data and Artificial Intelligence',
    summary: 'The complete data science lifecycle: hypothesis testing, statistical modeling, feature engineering, machine learning, and business storytelling.',
    skillLevel: 'Beginner',
    totalDurationHours: 46,
    relatedCareers: ['Data Scientist', 'Data Analyst', 'AI/ML Engineer'],
    tags: ['Statistics', 'Python', 'Feature Engineering', 'Modeling', 'Hypothesis Testing'],
    learningObjectives: [
      'Formulate statistical hypotheses and design A/B tests with confidence intervals',
      'Clean noisy datasets, detect outliers, and engineer predictive features',
      'Train, evaluate, and tune supervised and unsupervised learning algorithms',
      'Interpret model predictions with SHAP and LIME explainability frameworks',
      'Deploy reproducible data science experiments using MLflow'
    ],
    modules: [
      {
        id: 'ds-mod-1',
        title: 'Inferential Statistics & Hypothesis Testing',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Probability distributions, Central Limit Theorem, Z-tests, t-tests, ANOVA, and p-value significance.',
        topics: ['Normal, Binomial & Poisson Distributions', 'Central Limit Theorem in Practice', 'Two-Sample T-Tests & Welch’s Test', 'Type I and Type II Errors'],
        stepByStepExplanation: 'Statistical inference draws conclusions about populations using representative samples. Hypothesis testing sets a null hypothesis (H0) and computes a p-value representing the probability of observing data at least as extreme under H0. A significance threshold alpha (commonly 0.05) controls False Positive risk.',
        handsOnExercise: {
          title: 'Conduct an A/B Test Significance Analysis in Python',
          instructions: 'Calculate the t-statistic and p-value for two conversion rate cohorts using scipy.stats.ttest_ind and determine statistical significance.',
          taskSnippet: 'from scipy import stats\nt_stat, p_val = stats.ttest_ind(variant_a, variant_b, equal_var=False)',
          solutionTip: 'Always check if variances are equal (Levene test) before assuming equal variance; use Welch t-test by default.'
        },
        practicalProject: {
          title: 'E-Commerce Conversion Rate A/B Test Case Study',
          objective: 'Analyze an experimental checkout flow dataset, perform sample size power calculations, and write an executive decision memo.',
          deliverable: 'Jupyter notebook with distribution plots and clear statistical verdict.'
        },
        learningResources: [
          { title: 'Khan Academy: Statistics & Probability', type: 'guide', url: 'https://www.khanacademy.org/math/statistics-probability' },
          { title: 'SciPy Statistical Functions Documentation', type: 'doc', url: 'https://docs.scipy.org/doc/scipy/reference/stats.html' }
        ]
      },
      {
        id: 'ds-mod-2',
        title: 'Feature Engineering & Data Preprocessing Pipelines',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'Missing value imputation, categorical encoding, feature scaling, and collinearity reduction.',
        topics: ['Target Encoding vs One-Hot Encoding', 'Variance Inflation Factor (VIF)', 'Polynomial Features & Interactions', 'Scikit-Learn ColumnTransformer Pipelines'],
        stepByStepExplanation: 'Raw data contains missing values, outliers, and multicollinearity that mislead estimators. Machine learning models require numerical features scaled appropriately. Scikit-learn Pipeline chains imputation, encoding, and scaling into a leak-free pipeline.',
        handsOnExercise: {
          title: 'Build a Leak-Free Preprocessing Pipeline',
          instructions: 'Assemble a ColumnTransformer handling numerical imputation with StandardScaler and categorical features with OneHotEncoder.',
          taskSnippet: 'pipe = Pipeline([\n  ("pre", ColumnTransformer([...])),\n  ("clf", RandomForestClassifier())\n])',
          solutionTip: 'Fit transformations strictly on training folds to prevent data leakage from the test split.'
        },
        practicalProject: {
          title: 'Customer Churn Prediction Engine',
          objective: 'Clean a telecom dataset, engineer ten interaction features, handle class imbalance with SMOTE, and optimize ROC-AUC.',
          deliverable: 'End-to-end Python pipeline notebook with cross-validation score.'
        },
        learningResources: [
          { title: 'Scikit-Learn Feature Engineering Guide', type: 'doc', url: 'https://scikit-learn.org/stable/modules/preprocessing.html' },
          { title: 'Feature Engineering for Machine Learning by Alice Zheng', type: 'guide', url: 'https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/' }
        ]
      },
      {
        id: 'ds-mod-3',
        title: 'Model Explainability & Production Deployment',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'SHAP tree explainers, permutation importance, drift detection, and MLflow experiment tracking.',
        topics: ['SHAP Values & Feature Attribution', 'Model Drift vs Concept Drift', 'MLflow Tracking & Model Registry', 'FastAPI Prediction Endpoint'],
        stepByStepExplanation: 'Black-box models require interpretability for production compliance. SHAP calculates Shapley values from cooperative game theory to measure individual feature contributions to any prediction. Production models must also be monitored for statistical drift as user distributions shift over time.',
        handsOnExercise: {
          title: 'Compute SHAP Attribution for XGBoost Predictions',
          instructions: 'Generate SHAP summary and waterfall plots for individual credit approval decisions to explain reasons for rejections.',
          taskSnippet: 'explainer = shap.TreeExplainer(model)\nshap_values = explainer(X_test)\nshap.plots.waterfall(shap_values[0])',
          solutionTip: 'TreeExplainer is optimized for gradient boosted trees and computes exact Shapley values in polynomial time.'
        },
        practicalProject: {
          title: 'Production Credit Risk Scoring Service',
          objective: 'Train a calibrated XGBoost classifier, log metrics with MLflow, and package the model as a Dockerized FastAPI service with SHAP outputs.',
          deliverable: 'Packaged microservice with Swagger documentation and containerfile.'
        },
        learningResources: [
          { title: 'SHAP (SHapley Additive exPlanations) Documentation', type: 'doc', url: 'https://shap.readthedocs.io/' },
          { title: 'MLflow Tracking Guide', type: 'guide', url: 'https://mlflow.org/docs/latest/index.html' }
        ]
      }
    ],
    quiz: {
      id: 'ds-quiz',
      title: 'Data Science & Statistics Assessment',
      description: 'Test your understanding of hypothesis testing, feature leakage, and model interpretability.',
      passingScore: 70,
      questions: [
        {
          id: 'ds-q1',
          question: 'What is data leakage during machine learning model preprocessing?',
          options: ['Encrypting data incorrectly', 'Information from the test or validation dataset inadvertently influencing the training pipeline', 'Hardware memory leaks in Python', 'Losing CSV rows during pandas import'],
          correctAnswerIndex: 1,
          explanation: 'Data leakage happens when test set information leaks into training (e.g., scaling features on the whole dataset before splitting).'
        },
        {
          id: 'ds-q2',
          question: 'In statistical A/B testing, what does a p-value less than 0.05 signify?',
          options: ['The test is 95% wrong', 'Assuming the null hypothesis is true, there is less than a 5% probability of observing these results by chance alone', 'The effect size is large', 'The experiment should be deleted'],
          correctAnswerIndex: 1,
          explanation: 'A p-value < 0.05 means the observed difference is unlikely under the null hypothesis, rejecting H0.'
        },
        {
          id: 'ds-q3',
          question: 'What do SHAP values quantify for an individual prediction?',
          options: ['The training time in milliseconds', 'The marginal contribution of each input feature toward shifting the prediction from the base expected value', 'The memory consumption of the tree', 'The probability of server timeout'],
          correctAnswerIndex: 1,
          explanation: 'SHAP values allocate fair attribution to each feature for an individual prediction based on cooperative game theory.'
        }
      ]
    }
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    category: 'Data and Artificial Intelligence',
    summary: 'Master NumPy arrays, Pandas DataFrames, vectorization, exploratory data analysis (EDA), and data cleaning.',
    skillLevel: 'Beginner',
    totalDurationHours: 36,
    relatedCareers: ['Data Scientist', 'Data Analyst', 'AI/ML Engineer'],
    tags: ['Python', 'Pandas', 'NumPy', 'EDA', 'Data Wrangling'],
    learningObjectives: [
      'Perform vectorized array computations and multidimensional slicing with NumPy',
      'Wrangle messy tabular datasets with Pandas (groupbys, merges, pivots, indexing)',
      'Clean corrupt values, handle missing dates, and standardize data types',
      'Carry out structured Exploratory Data Analysis (EDA) with statistical profiling',
      'Export reproducible data pipelines to Parquet, SQL, and CSV'
    ],
    modules: [
      {
        id: 'pyds-mod-1',
        title: 'NumPy Vectorization & Numerical Computing',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Broadcasting rules, multidimensional arrays, vectorized math, and memory layouts.',
        topics: ['ndarray Memory Strides & C-Contiguity', 'Broadcasting Arithmetic Rules', 'Boolean Masking & Slicing', 'Linear Algebra Operations (np.linalg)'],
        stepByStepExplanation: 'Python loops are slow because of dynamic type checking on each iteration. NumPy executes operations in compiled C using vectorized SIMD instructions. Broadcasting allows NumPy to conduct arithmetic on arrays with differing but compatible shapes without duplicating data in memory.',
        handsOnExercise: {
          title: 'Implement Vectorized Cosine Similarity',
          instructions: 'Compute pairwise cosine similarity between query vectors and a 10,000-row embedding matrix without using for loops.',
          taskSnippet: 'norm_a = np.linalg.norm(a, axis=1, keepdims=True)\nsimilarity = np.dot(a, b.T) / (norm_a * norm_b.T)',
          solutionTip: 'Always use keepdims=True on reduction operations to facilitate automatic broadcasting.'
        },
        practicalProject: {
          title: 'Image Compression with Singular Value Decomposition (SVD)',
          objective: 'Deconstruct a grayscale image into singular values with NumPy and reconstruct approximations at various rank compressions.',
          deliverable: 'Interactive notebook demonstrating matrix approximation and compression ratios.'
        },
        learningResources: [
          { title: 'NumPy Quickstart Tutorial', type: 'doc', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
          { title: 'NumPy Illustrated Guide', type: 'guide', url: 'https://betterprogramming.pub/numpy-illustrated-the-visually-stunning-guide-to-all-things-numpy-5690b232e012' }
        ]
      },
      {
        id: 'pyds-mod-2',
        title: 'Pandas DataFrames, GroupBy & Time Series',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Data aggregation, multi-level indexing, rolling windows, and time series resampling.',
        topics: ['GroupBy Split-Apply-Combine Pattern', 'Pivot Tables & Crosstabs', 'DatetimeIndex & Resampling (D, W, M)', 'Handling Missing Values (ffill, bfill, interpolate)'],
        stepByStepExplanation: 'Pandas GroupBy implements the split-apply-combine idiom: data is split into groups based on keys, functions (sum, mean, custom transforms) are applied, and results are combined into a new DataFrame. Working with time series requires casting to DatetimeIndex to unlock rolling averages and resampling.',
        handsOnExercise: {
          title: 'Compute 7-Day Rolling Revenue by Store Region',
          instructions: 'Group sales records by region and compute a 7-day rolling average of daily revenue without leaking future dates.',
          taskSnippet: 'df.groupby("region").rolling("7D", on="date")["revenue"].mean()',
          solutionTip: 'Ensure the DataFrame is sorted chronologically by date before calling rolling operations.'
        },
        practicalProject: {
          title: 'Stock Market Volatility & Trading Signals EDA',
          objective: 'Wrangle 5 years of ticker price data, compute Bollinger Bands and MACD indicators, and identify correlation clusters.',
          deliverable: 'Complete analysis notebook with clean pandas transformations.'
        },
        learningResources: [
          { title: 'Pandas User Guide', type: 'doc', url: 'https://pandas.pydata.org/docs/user_guide/index.html' },
          { title: 'Modern Pandas by Tom Augspurger', type: 'guide', url: 'https://tomaugspurger.net/posts/modern-1-intro/' }
        ]
      },
      {
        id: 'pyds-mod-3',
        title: 'High-Performance Data Wrangling & Parquet Pipelines',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'Memory optimization with categories, Polars versus Pandas, Arrow integration, and Parquet caching.',
        topics: ['Memory Footprint Optimization (Categoricals & Int types)', 'PyArrow Engine in Pandas', 'Apache Parquet Columnar Storage', 'Transitioning to Polars for 10M+ Rows'],
        stepByStepExplanation: 'Strings in Pandas take substantial memory due to Python object overhead. Converting low-cardinality strings to categorical dtypes cuts RAM usage by up to 90%. Apache Parquet stores data column-wise with snappy compression, drastically accelerating analytical queries.',
        handsOnExercise: {
          title: 'Optimize a 2GB CSV into Compressed Parquet',
          instructions: 'Downcast integer types, categorize text columns, and write partitioned Parquet files using pyarrow.',
          taskSnippet: 'df.to_parquet("output.parquet", engine="pyarrow", compression="snappy")',
          solutionTip: 'Use df.info(memory_usage="deep") to monitor exact RAM consumption before and after casting.'
        },
        practicalProject: {
          title: 'Massive Ride-Sharing Trips Analysis Pipeline',
          objective: 'Process 10 million taxi ride records, optimize schemas, compute trip duration percentiles, and store analytics in Parquet.',
          deliverable: 'High-throughput data wrangling script benchmarked under 30 seconds.'
        },
        learningResources: [
          { title: 'PyArrow Documentation', type: 'doc', url: 'https://arrow.apache.org/docs/python/' },
          { title: 'Polars Fast Dataframe Guide', type: 'guide', url: 'https://pola.rs/' }
        ]
      }
    ],
    quiz: {
      id: 'pyds-quiz',
      title: 'Python Data Science Assessment',
      description: 'Test your understanding of NumPy broadcasting, Pandas indexing, and memory optimization.',
      passingScore: 70,
      questions: [
        {
          id: 'pyds-q1',
          question: 'Why is vectorization in NumPy orders of magnitude faster than standard Python for loops?',
          options: ['Because it converts Python to JavaScript', 'Because it runs compiled C routines directly over contiguous memory blocks using SIMD CPU instructions', 'Because it deletes null values', 'Because it skips calculations'],
          correctAnswerIndex: 1,
          explanation: 'NumPy executes pre-compiled C loops without dynamic Python type checking overhead over contiguous memory arrays.'
        },
        {
          id: 'pyds-q2',
          question: 'What is the fastest way to reduce memory usage for a text column containing repeated strings (like Country or State) in Pandas?',
          options: ['Convert it to float', 'Cast the column dtype to "category"', 'Save it as a TXT file', 'Drop the column'],
          correctAnswerIndex: 1,
          explanation: 'Categorical types store integers internally and map them to unique string levels, drastically slashing memory usage.'
        },
        {
          id: 'pyds-q3',
          question: 'Which method should you call to prevent chained assignment warnings when filtering a DataFrame subset to modify later?',
          options: ['.copy()', '.reset_index()', '.drop()', '.squeeze()'],
          correctAnswerIndex: 0,
          explanation: 'Calling .copy() creates an explicit deep copy of the slice, preventing SettingWithCopyWarning.'
        }
      ]
    }
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    category: 'Data and Artificial Intelligence',
    summary: 'Supervised and unsupervised algorithms, mathematical foundations, model evaluation, and Scikit-Learn.',
    skillLevel: 'Intermediate',
    totalDurationHours: 44,
    relatedCareers: ['AI/ML Engineer', 'Data Scientist'],
    tags: ['Scikit-Learn', 'Regression', 'Classification', 'Clustering', 'XGBoost', 'Ensembles'],
    learningObjectives: [
      'Master regression and classification fundamentals: Logistic Regression, SVM, Random Forests, XGBoost',
      'Understand mathematical cost functions: Mean Squared Error, Binary Cross-Entropy, Margin bounds',
      'Implement unsupervised learning: K-Means, DBSCAN, and PCA dimensionality reduction',
      'Evaluate models rigorously with K-Fold cross-validation, Precision-Recall curves, and ROC-AUC',
      'Prevent overfitting through L1/L2 regularization, early stopping, and hyperparameter tuning'
    ],
    modules: [
      {
        id: 'ml-mod-1',
        title: 'Supervised Learning & Regularization',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Linear/Logistic regression, cost function minimization, gradient descent, and Lasso/Ridge.',
        topics: ['Gradient Descent Optimization (SGD, Batch)', 'L1 (Lasso) vs L2 (Ridge) Regularization', 'Decision Boundaries in Logistic Regression', 'Confusion Matrix, Precision, Recall, F1'],
        stepByStepExplanation: 'Linear models find weights that minimize residual sum of squares. Regularization adds a penalty term: L1 (Lasso) penalizes absolute values and drives non-informative weights to zero (feature selection); L2 (Ridge) penalizes squared weights and shrinks coefficients smoothly to prevent collinear sensitivity.',
        handsOnExercise: {
          title: 'Train a Regularized Ridge & Lasso Model',
          instructions: 'Fit LassoCV on a collinear dataset to observe which feature weights drop to zero and evaluate R2 score on held-out validation data.',
          taskSnippet: 'from sklearn.linear_model import LassoCV\nlasso = LassoCV(cv=5).fit(X_train, y_train)',
          solutionTip: 'Always scale input features with StandardScaler prior to applying L1 or L2 penalties.'
        },
        practicalProject: {
          title: 'Housing Market Price Valuation Predictor',
          objective: 'Train multiple regularized linear models, analyze residual distributions, and evaluate RMSE across cross-validation folds.',
          deliverable: 'Jupyter notebook with coefficient shrinkage visualizations and residual diagnostic plots.'
        },
        learningResources: [
          { title: 'Scikit-Learn Supervised Models Guide', type: 'doc', url: 'https://scikit-learn.org/stable/supervised_learning.html' },
          { title: 'StatQuest: Machine Learning Fundamentals', type: 'guide', url: 'https://statquest.org/' }
        ]
      },
      {
        id: 'ml-mod-2',
        title: 'Tree Ensembles: Random Forest & Gradient Boosting',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'Decision trees, Gini impurity, Bagging, Random Forests, Boosting (XGBoost, LightGBM).',
        topics: ['Information Gain & Gini Impurity', 'Bagging vs Boosting Mechanics', 'XGBoost Second-Order Gradient Trees', 'Hyperparameter Search (Optuna, GridSearchCV)'],
        stepByStepExplanation: 'Random Forests use Bagging (Bootstrap Aggregating) to train trees independently on random data subsets and feature subsets, reducing variance. Gradient Boosting trains trees sequentially, where each new tree fits the residual pseudo-errors of the preceding ensemble.',
        handsOnExercise: {
          title: 'Tune XGBoost Hyperparameters with Optuna',
          instructions: 'Set up an Optuna objective function optimizing max_depth, learning_rate, and subsample targeting max ROC-AUC on StratifiedKFold.',
          taskSnippet: 'def objective(trial):\n  lr = trial.suggest_float("lr", 0.01, 0.2)\n  # train and return mean cross-val score',
          solutionTip: 'Use early_stopping_rounds to stop boosting when validation loss fails to improve for 20 rounds.'
        },
        practicalProject: {
          title: 'Credit Fraud Detection with Class Imbalance',
          objective: 'Train LightGBM and XGBoost models on a 99.8% imbalanced transaction dataset, evaluating PR-AUC and precision at top 1% risk decile.',
          deliverable: 'Model training pipeline with confusion matrix at customized decision thresholds.'
        },
        learningResources: [
          { title: 'XGBoost Documentation & Architecture', type: 'doc', url: 'https://xgboost.readthedocs.io/' },
          { title: 'Optuna Hyperparameter Framework', type: 'guide', url: 'https://optuna.org/' }
        ]
      },
      {
        id: 'ml-mod-3',
        title: 'Unsupervised Learning & Dimensionality Reduction',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'K-Means clustering, DBSCAN density clustering, Principal Component Analysis (PCA), and t-SNE.',
        topics: ['K-Means Clustering & Elbow Method', 'DBSCAN Density-Based Outlier Detection', 'PCA Eigenvectors & Explained Variance', 't-SNE & UMAP Latent Projections'],
        stepByStepExplanation: 'Unsupervised methods discover patterns in unlabelled data. K-Means partitions data into K centroids by minimizing inertia. PCA calculates orthogonal eigenvectors of the covariance matrix to project high-dimensional data into low dimensions while capturing maximum variance.',
        handsOnExercise: {
          title: 'Reduce 50 Features to 3 Principal Components',
          instructions: 'Fit PCA on scaled data, compute cumulative explained variance ratio, and visualize clusters in 2D space.',
          taskSnippet: 'pca = PCA(n_components=0.95)\nX_reduced = pca.fit_transform(X_scaled)',
          solutionTip: 'Passing a float like 0.95 to PCA selects the minimum components required to retain 95% of dataset variance.'
        },
        practicalProject: {
          title: 'Customer Segmentation & Behavioral Clustering',
          objective: 'Segment customer purchase histories using PCA and K-Means, profile customer personas, and compute silhouette scores.',
          deliverable: 'Interactive cluster visualization and business segment report.'
        },
        learningResources: [
          { title: 'Scikit-Learn Clustering Documentation', type: 'doc', url: 'https://scikit-learn.org/stable/modules/clustering.html' },
          { title: 'Understanding PCA Visually (Explained Visually)', type: 'guide', url: 'https://setosa.io/ev/principal-component-analysis/' }
        ]
      }
    ],
    quiz: {
      id: 'ml-quiz',
      title: 'Machine Learning Fundamentals Assessment',
      description: 'Evaluate your grasp of bias-variance trade-offs, regularization, and ensemble algorithms.',
      passingScore: 70,
      questions: [
        {
          id: 'ml-q1',
          question: 'What is the key difference in coefficient behavior between L1 (Lasso) and L2 (Ridge) regularization?',
          options: ['Ridge zeroes out coefficients, while Lasso doubles them', 'Lasso drives non-informative feature coefficients strictly to zero (feature selection), while Ridge shrinks them continuously', 'Both do the exact same thing', 'L1 is only for neural networks'],
          correctAnswerIndex: 1,
          explanation: 'Lasso (L1) produces sparse solutions with exact zeros, acting as embedded feature selection.'
        },
        {
          id: 'ml-q2',
          question: 'How do Gradient Boosting and Random Forest differ in tree construction?',
          options: ['Random Forest trains trees sequentially, while Gradient Boosting trains them in parallel', 'Random Forest builds trees independently via bagging, while Gradient Boosting builds trees sequentially to correct prior errors', 'Random Forest does not use decision trees', 'Gradient Boosting only works on images'],
          correctAnswerIndex: 1,
          explanation: 'Random Forest trains trees independently via bagging, whereas Gradient Boosting trains trees iteratively to fit prior residuals.'
        },
        {
          id: 'ml-q3',
          question: 'When evaluating a model on an extremely imbalanced classification dataset (e.g. 0.1% positive fraud cases), which metric is least informative?',
          options: ['Precision-Recall AUC', 'Raw Accuracy', 'F1-Score', 'Recall'],
          correctAnswerIndex: 1,
          explanation: 'A naive model predicting negative every time would achieve 99.9% raw accuracy while detecting 0 fraud cases.'
        }
      ]
    }
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    category: 'Data and Artificial Intelligence',
    summary: 'Neural network architectures, PyTorch, backpropagation, CNNs for computer vision, and RNNs/LSTMs.',
    skillLevel: 'Intermediate',
    totalDurationHours: 48,
    relatedCareers: ['AI/ML Engineer', 'Data Scientist'],
    tags: ['PyTorch', 'Neural Networks', 'CNN', 'Backpropagation', 'Computer Vision'],
    learningObjectives: [
      'Understand the mathematical mechanics of backpropagation, tensors, autograd, and loss landscapes',
      'Build, train, and validate deep neural networks using idiomatic PyTorch',
      'Design Convolutional Neural Networks (ResNet, ConvNeXt) for computer vision tasks',
      'Employ modern regularization techniques: Dropout, BatchNorm, LayerNorm, and AdamW',
      'Leverage transfer learning and fine-tune pre-trained torchvision models'
    ],
    modules: [
      {
        id: 'dl-mod-1',
        title: 'PyTorch Fundamentals, Tensors & Autograd',
        level: 'Beginner',
        estimatedMinutes: 85,
        overview: 'Tensors on CUDA/MPS devices, autograd dynamic computation graphs, and custom modules.',
        topics: ['Tensor Operations & Device Management', 'torch.autograd & Gradient Accumulation', 'nn.Module Subclassing & Forward Pass', 'Loss Functions & Optimizers (AdamW)'],
        stepByStepExplanation: 'PyTorch constructs a dynamic computational graph during forward execution. Calling loss.backward() traverses the graph in reverse using the chain rule of calculus to compute partial derivatives (gradients) stored in tensor.grad.',
        handsOnExercise: {
          title: 'Implement a Multi-Layer Perceptron (MLP) in PyTorch',
          instructions: 'Build a 3-layer neural network using nn.Module with ReLU activations and Dropout, and write the standard training loop.',
          taskSnippet: 'optimizer.zero_grad()\nloss = criterion(outputs, targets)\nloss.backward()\noptimizer.step()',
          solutionTip: 'Always call optimizer.zero_grad() at the beginning of each training step to prevent gradients from accumulating across epochs.'
        },
        practicalProject: {
          title: 'Custom Handwritten Digit Classifier from Scratch',
          objective: 'Train a PyTorch network on MNIST achieving >98% test accuracy, saving model checkpoints with torch.save.',
          deliverable: 'PyTorch training script with validation loss curves logged over epochs.'
        },
        learningResources: [
          { title: 'Official PyTorch Tutorials', type: 'doc', url: 'https://pytorch.org/tutorials/' },
          { title: 'Deep Learning with PyTorch by Eli Stevens', type: 'guide', url: 'https://pytorch.org/deep-learning-with-pytorch' }
        ]
      },
      {
        id: 'dl-mod-2',
        title: 'Convolutional Neural Networks & Vision Architectures',
        level: 'Intermediate',
        estimatedMinutes: 105,
        overview: 'Convolution filters, pooling, residual skip connections (ResNet), and data augmentation.',
        topics: ['Conv2d Kernel Convolutions & Stride', 'Batch Normalization vs Layer Normalization', 'Residual Connections & Vanishing Gradients', 'Torchvision Transforms & Data Augmentation'],
        stepByStepExplanation: 'Convolutional layers slide parameterized kernels across input feature maps to capture spatial invariants like edges and textures. ResNet introduced skip connections (residual addition y = F(x) + x), enabling training of networks over 100 layers deep without vanishing gradient failure.',
        handsOnExercise: {
          title: 'Build a Residual Block in PyTorch',
          instructions: 'Implement a ResNet BasicBlock module with two 3x3 conv layers, batch norm, and residual shortcut addition.',
          taskSnippet: 'class ResidualBlock(nn.Module):\n  def forward(self, x):\n    return F.relu(self.conv2(self.bn1(self.conv1(x))) + x)',
          solutionTip: 'If channel dimensions change between input and output, apply a 1x1 convolution shortcut to match tensor shapes.'
        },
        practicalProject: {
          title: 'Transfer Learning Dog Breed Classifier with ResNet-50',
          objective: 'Fine-tune a pretrained ResNet-50 on Stanford Dogs dataset, freezing backbone layers and training custom head classifiers.',
          deliverable: 'Evaluation report with classification report and Grad-CAM activation heatmaps.'
        },
        learningResources: [
          { title: 'CS231n: Convolutional Networks for Visual Recognition', type: 'guide', url: 'https://cs231n.github.io/' },
          { title: 'Torchvision Models Reference', type: 'doc', url: 'https://pytorch.org/vision/stable/models.html' }
        ]
      },
      {
        id: 'dl-mod-3',
        title: 'Optimization Landscapes, Learning Rates & Deployment',
        level: 'Advanced',
        estimatedMinutes: 120,
        overview: 'Learning rate schedulers (Cosine Annealing), mixed precision (AMP), and ONNX export.',
        topics: ['Cosine Annealing with Warm Restarts', 'Automatic Mixed Precision (torch.cuda.amp)', 'Weight Initialization (He, Xavier)', 'ONNX Export & TorchScript Inference'],
        stepByStepExplanation: 'Automatic Mixed Precision (AMP) uses 16-bit floating-point (FP16/BF16) math for matrix multiplications, speeding up GPU training while conserving memory. Exporting PyTorch models to ONNX allows high-speed inference on CPU, TensorRT, or browser runtimes.',
        handsOnExercise: {
          title: 'Export PyTorch Model to ONNX and Validate',
          instructions: 'Convert a trained PyTorch model to ONNX using torch.onnx.export and run inference using onnxruntime in Python.',
          taskSnippet: 'torch.onnx.export(model, dummy_input, "model.onnx", input_names=["input"], output_names=["output"])',
          solutionTip: 'Set model.eval() before export to fix dropout and batch normalization states to inference mode.'
        },
        practicalProject: {
          title: 'Real-Time Edge Object Classification Service',
          objective: 'Train a lightweight MobileNetV3 model, export to ONNX, and run accelerated real-time web inference.',
          deliverable: 'ONNX model file and benchmark script comparing PyTorch vs ONNX runtime latency.'
        },
        learningResources: [
          { title: 'ONNX Runtime Python Documentation', type: 'doc', url: 'https://onnxruntime.ai/docs/' },
          { title: 'PyTorch Performance Tuning Guide', type: 'guide', url: 'https://pytorch.org/tutorials/recipes/recipes/tuning_guide.html' }
        ]
      }
    ],
    quiz: {
      id: 'dl-quiz',
      title: 'Deep Learning & PyTorch Assessment',
      description: 'Evaluate your knowledge of computational graphs, residual architectures, and mixed precision.',
      passingScore: 70,
      questions: [
        {
          id: 'dl-q1',
          question: 'Why do Residual Networks (ResNets) incorporate skip connections (shortcut additions)?',
          options: ['To double the number of parameters', 'To allow gradients to flow directly backwards during backpropagation, eliminating vanishing gradients in deep networks', 'To convert convolutions to linear layers', 'To run without GPUs'],
          correctAnswerIndex: 1,
          explanation: 'Residual skip connections allow identity gradient flow during backpropagation, enabling very deep architectures.'
        },
        {
          id: 'dl-q2',
          question: 'What is the purpose of optimizer.zero_grad() in a PyTorch training loop?',
          options: ['To reset learning rate to zero', 'To clear existing accumulated gradients before computing new gradients for the current batch', 'To delete the model weights', 'To shut down CUDA workers'],
          correctAnswerIndex: 1,
          explanation: 'PyTorch accumulates gradients by default; failing to zero them adds gradients across batches.'
        },
        {
          id: 'dl-q3',
          question: 'What does Automatic Mixed Precision (AMP) primarily accomplish during GPU training?',
          options: ['Calculates matrix multiplies in FP16/BF16 to accelerate throughput and reduce GPU VRAM usage', 'Compresses images before saving', 'Removes layers automatically', 'Encrypts weights'],
          correctAnswerIndex: 0,
          explanation: 'AMP executes tensor math in half-precision (FP16/BF16) while keeping master weights in FP32, doubling speed.'
        }
      ]
    }
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    category: 'Data and Artificial Intelligence',
    summary: 'Master the theory and practical application of generative models, diffusion algorithms, VAEs, GANs, and multimodal architectures.',
    skillLevel: 'Intermediate',
    totalDurationHours: 42,
    relatedCareers: ['AI/ML Engineer', 'Data Scientist'],
    tags: ['Generative AI', 'Diffusion Models', 'VAEs', 'Multimodal', 'Prompt Engineering'],
    learningObjectives: [
      'Understand the mathematics behind generative modeling: probability density estimation, latent spaces',
      'Study Denoising Diffusion Probabilistic Models (DDPM) and Latent Diffusion',
      'Build generative pipelines combining text, image, and audio modalities',
      'Evaluate generative outputs using FID scores, BLEU, and human evaluation benchmarks',
      'Address ethics, watermarking, copyright, and safety in generative systems'
    ],
    modules: [
      {
        id: 'genai-mod-1',
        title: 'Foundations of Generative Models & Latent Spaces',
        level: 'Beginner',
        estimatedMinutes: 80,
        overview: 'Discriminative vs Generative models, Autoencoders, Variational Autoencoders (VAEs), and latent interpolation.',
        topics: ['Latent Space Topology & Manifolds', 'Variational Autoencoders & KL Divergence', 'Reparameterization Trick in VAEs', 'Generative Adversarial Networks (GANs)'],
        stepByStepExplanation: 'Discriminative models estimate P(Y|X) while generative models estimate the joint probability distribution P(X, Y) or data distribution P(X). VAEs map inputs into continuous latent Gaussian distributions regularized by Kullback-Leibler (KL) divergence, allowing smooth sampling from the latent manifold.',
        handsOnExercise: {
          title: 'Implement the VAE Reparameterization Trick',
          instructions: 'Write the PyTorch reparameterization function that samples latent vectors z = mu + sigma * epsilon without breaking backpropagation.',
          taskSnippet: 'def reparameterize(mu, logvar):\n  std = torch.exp(0.5 * logvar)\n  eps = torch.randn_like(std)\n  return mu + eps * std',
          solutionTip: 'Sampling epsilon from a standard normal allows gradients to flow through mu and logvar via standard backpropagation.'
        },
        practicalProject: {
          title: 'Latent Space Face Generator with VAE',
          objective: 'Train a convolutional VAE on CelebA, generate novel faces, and perform latent vector arithmetic (e.g., adding smiling vectors).',
          deliverable: 'Interactive notebook showing latent interpolations and reconstruction loss.'
        },
        learningResources: [
          { title: 'Lilian Weng: From Autoencoder to Beta-VAE', type: 'guide', url: 'https://lilianweng.github.io/posts/2018-08-12-vae/' },
          { title: 'PyTorch VAE Architectures', type: 'doc', url: 'https://github.com/AntixK/PyTorch-VAE' }
        ]
      },
      {
        id: 'genai-mod-2',
        title: 'Diffusion Models & Text-to-Image Generation',
        level: 'Intermediate',
        estimatedMinutes: 95,
        overview: 'Forward noising processes, reverse denoising with U-Net, Classifier-Free Guidance (CFG), and Stable Diffusion.',
        topics: ['DDPM Markov Forward Noising', 'U-Net Denoising Architecture', 'Classifier-Free Guidance (CFG Scale)', 'Latent Diffusion Models (Stable Diffusion)'],
        stepByStepExplanation: 'Diffusion models add Gaussian noise to images over T timesteps until only pure noise remains. A U-Net neural network is trained to predict the added noise at each step. By iteratively subtracting predicted noise, the model generates high-fidelity images from pure random noise.',
        handsOnExercise: {
          title: 'Implement Linear Beta Noise Scheduling',
          instructions: 'Calculate cumulative alpha schedules (alphas_cumprod) and write the forward diffusion function that noises an image to timestep t.',
          taskSnippet: 'def q_sample(x_0, t, noise):\n  return sqrt_alphas_cumprod[t] * x_0 + sqrt_one_minus_alphas_cumprod[t] * noise',
          solutionTip: 'The forward noising equation allows direct sampling at any arbitrary timestep t in a single closed-form step.'
        },
        practicalProject: {
          title: 'Custom Diffusion Model for Icon Generation',
          objective: 'Train a mini DDPM on 32x32 sprites or icons, implement sampling with CFG guidance, and evaluate generated samples.',
          deliverable: 'Training script and visualization of the reverse denoising trajectory over 50 steps.'
        },
        learningResources: [
          { title: 'Hugging Face Diffusers Documentation', type: 'doc', url: 'https://huggingface.co/docs/diffusers/' },
          { title: 'What are Diffusion Models? (Lil Log)', type: 'guide', url: 'https://lilianweng.github.io/posts/2021-07-11-diffusion-models/' }
        ]
      },
      {
        id: 'genai-mod-3',
        title: 'Multimodal Systems, ControlNet & Production Generation',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'CLIP image-text alignment, ControlNet spatial conditioning, LoRA fine-tuning, and safety filters.',
        topics: ['CLIP (Contrastive Language-Image Pretraining)', 'ControlNet Pose & Canny Edge Conditioning', 'Low-Rank Adaptation (LoRA) for Generation', 'Watermarking & C2PA Provenance Standards'],
        stepByStepExplanation: 'OpenAI CLIP aligns text tokens and image pixels into a shared semantic embedding space via contrastive learning. ControlNet freezes original diffusion weights and trains lightweight zero-convolution copies to condition generation on depth maps, sketches, or human poses.',
        handsOnExercise: {
          title: 'Fine-Tune a Diffusion LoRA on Custom Subject',
          instructions: 'Configure LoRA rank and alpha hyperparameters on cross-attention projection layers and train on 15 custom product images.',
          taskSnippet: 'pipeline.load_lora_weights("output/custom_lora.safetensors")',
          solutionTip: 'Setting LoRA rank r=16 captures high quality while keeping weight files under 100MB.'
        },
        practicalProject: {
          title: 'AI Product Photography Studio Generator',
          objective: 'Build an automated pipeline that takes transparent product cutouts, generates realistic studio scenes via ControlNet, and evaluates realism.',
          deliverable: 'Production Python pipeline integrated with Hugging Face diffusers.'
        },
        learningResources: [
          { title: 'ControlNet Research Paper & Implementation', type: 'doc', url: 'https://github.com/lllyasviel/ControlNet' },
          { title: 'Hugging Face LoRA Training Guide', type: 'guide', url: 'https://huggingface.co/docs/peft/conceptual_guides/lora' }
        ]
      }
    ],
    quiz: {
      id: 'genai-quiz',
      title: 'Generative AI Concepts Assessment',
      description: 'Test your understanding of latent spaces, diffusion mechanics, and multimodal conditioning.',
      passingScore: 70,
      questions: [
        {
          id: 'genai-q1',
          question: 'What is the primary role of the U-Net in Denoising Diffusion Probabilistic Models (DDPM)?',
          options: ['To generate SQL queries', 'To predict the exact noise added to an image at a specific timestep t', 'To classify image captions into languages', 'To compress files into MP3 format'],
          correctAnswerIndex: 1,
          explanation: 'The U-Net architecture is trained to predict the Gaussian noise epsilon that was added to the clean image at timestep t.'
        },
        {
          id: 'genai-q2',
          question: 'Why did Stable Diffusion introduce Latent Diffusion instead of pixel-space diffusion?',
          options: ['Because pixels do not have colors', 'To diffuse in a compressed lower-dimensional latent space (via a VAE), drastically reducing GPU computation', 'To prevent internet downloads', 'To work only on text'],
          correctAnswerIndex: 1,
          explanation: 'Latent diffusion operates on 64x64 latent representations rather than 512x512 pixels, cutting computational demands significantly.'
        },
        {
          id: 'genai-q3',
          question: 'What does Classifier-Free Guidance (CFG) scale govern during diffusion sampling?',
          options: ['The file size of the output image', 'How strictly the model adheres to the text prompt versus unconditional creative variance', 'The download speed of model weights', 'The CPU fan speed'],
          correctAnswerIndex: 1,
          explanation: 'Higher CFG scales force the sampling trajectory toward the text conditioning prompt at the expense of diversity.'
        }
      ]
    }
  },
  {
    id: 'llms',
    title: 'Large Language Models (LLMs)',
    category: 'Data and Artificial Intelligence',
    summary: 'Transformer architecture, self-attention, tokenization, instruction tuning, RAG systems, and AI agent frameworks.',
    skillLevel: 'Intermediate',
    totalDurationHours: 45,
    relatedCareers: ['AI/ML Engineer', 'Data Scientist'],
    tags: ['Transformers', 'LLMs', 'RAG', 'Prompt Engineering', 'LangChain', 'Fine-Tuning'],
    learningObjectives: [
      'Understand the inner workings of Transformer architecture: Self-Attention, Multi-Head Attention, RoPE',
      'Master prompt engineering techniques: Few-shot, Chain-of-Thought, ReAct, and structured output formatting',
      'Build production Retrieval-Augmented Generation (RAG) pipelines with vector databases',
      'Fine-tune open-weights models (Llama 3, Mistral) using LoRA and QLoRA',
      'Build autonomous AI agents with tool use, memory, and function calling'
    ],
    modules: [
      {
        id: 'llm-mod-1',
        title: 'Transformer Architecture & Self-Attention Mechanics',
        level: 'Beginner',
        estimatedMinutes: 85,
        overview: 'Tokenization (BPE), Queries/Keys/Values, Scaled Dot-Product Attention, and causal masking.',
        topics: ['Byte-Pair Encoding (BPE) & Vocabulary', 'Attention is All You Need: Q, K, V Matrix Math', 'Rotary Positional Embeddings (RoPE)', 'KV Cache in Autoregressive Inference'],
        stepByStepExplanation: 'Transformers process tokens in parallel. Self-attention projects each token embedding into Query, Key, and Value vectors. Attention weights are computed by softmax(Q * K^T / sqrt(d_k)). In autoregressive generation, the KV Cache retains past key-value activations to avoid recomputing past tokens.',
        handsOnExercise: {
          title: 'Implement Scaled Dot-Product Attention in PyTorch',
          instructions: 'Write the attention function with scale factor sqrt(d_k) and apply causal upper-triangular masking for autoregressive decoding.',
          taskSnippet: 'scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(d_k)\nscores = scores.masked_fill(mask == 0, -1e9)\nattn = torch.softmax(scores, dim=-1)',
          solutionTip: 'Masking with -1e9 ensures that upper-triangular tokens receive 0 probability after the softmax operation.'
        },
        practicalProject: {
          title: 'Miniature Decoder-Only Transformer (NanoGPT)',
          objective: 'Build a character-level decoder-only transformer from scratch in PyTorch and train it on Shakespeare text to generate prose.',
          deliverable: 'Complete model file with loss tracking and token generation function.'
        },
        learningResources: [
          { title: 'The Illustrated Transformer by Jay Alammar', type: 'guide', url: 'https://jalammar.github.io/illustrated-transformer/' },
          { title: 'Andrej Karpathy: Let’s build GPT from scratch', type: 'video', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' }
        ]
      },
      {
        id: 'llm-mod-2',
        title: 'Retrieval-Augmented Generation (RAG) & Vector Stores',
        level: 'Intermediate',
        estimatedMinutes: 100,
        overview: 'Chunking strategies, dense embeddings, vector indexing (HNSW), re-ranking, and hallucination reduction.',
        topics: ['Chunking Strategies (Semantic vs Fixed)', 'Dense Embedding Models & Cosine Distance', 'Hierarchical Navigable Small World (HNSW)', 'Cross-Encoder Re-Ranking & Citations'],
        stepByStepExplanation: 'LLMs suffer from context window limits and hallucinations. RAG indexes proprietary documents into dense vector spaces. Upon receiving a user prompt, the system retrieves top-k semantically relevant chunks via HNSW vector search, re-ranks them with a cross-encoder, and injects them into the LLM system prompt.',
        handsOnExercise: {
          title: 'Build a Chunking & Vector Search Pipeline',
          instructions: 'Ingest PDF documentation, chunk with 10% overlap, generate embeddings, and query a Chroma/Qdrant vector index.',
          taskSnippet: 'results = vector_db.query(query_embeddings=[q_embed], n_results=5)',
          solutionTip: 'Always pass source chunk metadata (document ID, page number) so the LLM can generate verifiable citations.'
        },
        practicalProject: {
          title: 'Enterprise Knowledge Base RAG Assistant',
          objective: 'Build a full RAG system over technical manuals supporting hybrid search (BM25 + dense vectors) and fact verification.',
          deliverable: 'Python application with question-answering CLI and source attribution.'
        },
        learningResources: [
          { title: 'Pinecone: RAG Architecture Guide', type: 'guide', url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/' },
          { title: 'LlamaIndex Documentation', type: 'doc', url: 'https://docs.llamaindex.ai/' }
        ]
      },
      {
        id: 'llm-mod-3',
        title: 'Model Fine-Tuning with QLoRA & Autonomous Agents',
        level: 'Advanced',
        estimatedMinutes: 125,
        overview: 'Parameter-Efficient Fine-Tuning (PEFT), QLoRA 4-bit quantization, function calling, and agent loops.',
        topics: ['QLoRA 4-Bit NormalFloat & Low-Rank Adapters', 'SFT (Supervised Fine-Tuning) with TRL & Unsloth', 'Function Calling & JSON Schema Tool Use', 'ReAct Agent Loop (Thought, Action, Observation)'],
        stepByStepExplanation: 'Fine-tuning updates model weights for specialized terminology or style. QLoRA quantizes the base model to 4-bit while training low-rank adapter matrices in 16-bit, enabling fine-tuning of 8B parameter models on a single consumer GPU. ReAct agents alternate between reasoning and tool execution.',
        handsOnExercise: {
          title: 'Define Function Calling Tools for an Agent',
          instructions: 'Construct a tool definition JSON schema for a weather API and parse the model tool_calls response to execute local functions.',
          taskSnippet: 'tools = [{"type": "function", "function": {"name": "get_stock_price", "parameters": {...}}}]',
          solutionTip: 'Ensure parameter descriptions clearly communicate expected units (e.g., ISO dates or USD currency) to the model.'
        },
        practicalProject: {
          title: 'Autonomous Code Debugging Agent',
          objective: 'Build an agent that receives GitHub bug reports, searches local repository files, runs unit tests, and proposes a git patch.',
          deliverable: 'Autonomous agent script utilizing tool execution and multi-turn conversational memory.'
        },
        learningResources: [
          { title: 'Hugging Face PEFT Library', type: 'doc', url: 'https://huggingface.co/docs/peft/' },
          { title: 'LangChain & LangGraph Agent Guide', type: 'guide', url: 'https://python.langchain.com/' }
        ]
      }
    ],
    quiz: {
      id: 'llm-quiz',
      title: 'Large Language Models Assessment',
      description: 'Evaluate your understanding of self-attention, RAG systems, and parameter-efficient tuning.',
      passingScore: 70,
      questions: [
        {
          id: 'llm-q1',
          question: 'What is the function of the KV (Key-Value) cache during autoregressive token generation in LLMs?',
          options: ['To cache HTML files', 'To avoid recomputing key and value representations of previously generated tokens on each forward pass', 'To download weights faster', 'To translate English to French'],
          correctAnswerIndex: 1,
          explanation: 'The KV cache stores computed keys and values for prior tokens, turning quadratic per-token generation into linear compute.'
        },
        {
          id: 'llm-q2',
          question: 'In a modern RAG (Retrieval-Augmented Generation) pipeline, what is the purpose of a Re-Ranker model?',
          options: ['To delete the vector database', 'To evaluate the top-k retrieved chunks using cross-attention for precise semantic relevance before feeding to the LLM', 'To tokenize words into characters', 'To train the base model from scratch'],
          correctAnswerIndex: 1,
          explanation: 'Re-rankers score query-document pairs jointly with cross-attention, filtering out false positives from fast vector searches.'
        },
        {
          id: 'llm-q3',
          question: 'How does QLoRA allow fine-tuning large models on limited GPU VRAM?',
          options: ['By throwing away 90% of model layers', 'By quantizing base model weights to 4-bit NormalFloat while training lightweight 16-bit low-rank adapters', 'By running exclusively on CPU', 'By disabling backpropagation'],
          correctAnswerIndex: 1,
          explanation: 'QLoRA quantizes frozen base weights to 4-bit, keeping memory minimal while optimizing low-rank adapter matrices.'
        }
      ]
    }
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    category: 'Data and Artificial Intelligence',
    summary: 'Text preprocessing, TF-IDF, Word2Vec, BERT embeddings, sequence tagging, and sentiment classification.',
    skillLevel: 'Beginner',
    totalDurationHours: 38,
    relatedCareers: ['AI/ML Engineer', 'Data Scientist'],
    tags: ['NLP', 'BERT', 'Transformers', 'Sentiment Analysis', 'Named Entity Recognition', 'Spacy'],
    learningObjectives: [
      'Master fundamental NLP pipelines: Tokenization, Stemming, Lemmatization, Stopwords, POS Tagging',
      'Compute text vector representations: Bag of Words, TF-IDF, and Word2Vec semantic vectors',
      'Fine-tune bidirectional encoder models like BERT and RoBERTa for text classification',
      'Extract structured entities using Named Entity Recognition (NER) with spaCy and Hugging Face',
      'Evaluate language models with ROUGE, BLEU, and Perplexity metrics'
    ],
    modules: [
      {
        id: 'nlp-mod-1',
        title: 'Classical NLP, Vector Space Models & TF-IDF',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'Tokenization, regex processing, lemmatization, N-grams, and Term Frequency-Inverse Document Frequency.',
        topics: ['NLTK & SpaCy Processing Pipelines', 'Stemming (Porter) vs Lemmatization (WordNet)', 'N-Grams & Bag-of-Words Representation', 'TF-IDF Vectorizer & Cosine Similarity'],
        stepByStepExplanation: 'Classical NLP transforms unstructured prose into numerical vectors. TF-IDF balances the frequency of a term in a document against its rarity across the entire corpus, down-weighting ubiquitous words like "the" and amplifying domain-specific keywords.',
        handsOnExercise: {
          title: 'Build a Document Recommendation Engine with TF-IDF',
          instructions: 'Fit a TfidfVectorizer on a collection of news articles and compute pairwise cosine similarity to retrieve top-3 similar articles.',
          taskSnippet: 'tfidf = TfidfVectorizer(max_features=5000, stop_words="english")\nmatrix = tfidf.fit_transform(corpus)',
          solutionTip: 'Use sublinear_tf=True in TfidfVectorizer to apply logarithmic term frequency scaling.'
        },
        practicalProject: {
          title: 'Automated Spam & Phishing Email Classifier',
          objective: 'Process raw email bodies, extract email headers and URL counts, train an ensemble classifier, and evaluate ROC-AUC.',
          deliverable: 'Python pipeline script with confusion matrix visualization.'
        },
        learningResources: [
          { title: 'spaCy 101: Everything you need to know', type: 'guide', url: 'https://spacy.io/usage/spacy-101' },
          { title: 'Scikit-Learn Text Feature Extraction', type: 'doc', url: 'https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction' }
        ]
      },
      {
        id: 'nlp-mod-2',
        title: 'Word Embeddings & Dense Representations',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'Word2Vec (Skip-gram and CBOW), FastText subword embeddings, and cosine vector arithmetic.',
        topics: ['Distributional Hypothesis in Linguistics', 'Word2Vec Skip-Gram with Negative Sampling', 'FastText Subword Character N-Grams', 'Handling Out-Of-Vocabulary (OOV) Tokens'],
        stepByStepExplanation: 'Word embeddings place words with similar contextual meanings close to each other in high-dimensional vector spaces. FastText extends Word2Vec by treating words as bags of character n-grams, enabling robust embeddings for misspelled and out-of-vocabulary words.',
        handsOnExercise: {
          title: 'Train Word2Vec Embeddings with Gensim',
          instructions: 'Train a Skip-Gram model on domain text and compute semantic analogies (e.g. king - man + woman = queen).',
          taskSnippet: 'model = Word2Vec(sentences, vector_size=100, window=5, min_count=2, sg=1)',
          solutionTip: 'Set sg=1 to use Skip-gram for better performance on infrequent words.'
        },
        practicalProject: {
          title: 'Medical Clinical Note Search Engine',
          objective: 'Train FastText embeddings on clinical records and build a semantic search tool matching symptom synonyms.',
          deliverable: 'Jupyter notebook with embedding t-SNE projection plots.'
        },
        learningResources: [
          { title: 'Gensim Word2Vec Documentation', type: 'doc', url: 'https://radimrehurek.com/gensim/models/word2vec.html' },
          { title: 'Stanford CS224N: Natural Language Processing with Deep Learning', type: 'guide', url: 'https://web.stanford.edu/class/cs224n/' }
        ]
      },
      {
        id: 'nlp-mod-3',
        title: 'BERT, Hugging Face Transformers & Sequence Labeling',
        level: 'Advanced',
        estimatedMinutes: 115,
        overview: 'BERT bidirectional attention, Masked Language Modeling (MLM), fine-tuning, and Named Entity Recognition (NER).',
        topics: ['BERT Architecture (CLS & SEP tokens)', 'Hugging Face Trainer API', 'Token Classification for Named Entity Recognition', 'Model Quantization for NLP Inference'],
        stepByStepExplanation: 'BERT conditions on both left and right context simultaneously using Masked Language Modeling. By taking the [CLS] token representation and attaching a linear classification layer, BERT can be fine-tuned on sentiment analysis, spam classification, or topic tagging with minimal labeled data.',
        handsOnExercise: {
          title: 'Fine-Tune DistilBERT with Hugging Face Trainer',
          instructions: 'Tokenize a sentiment dataset with DistilBertTokenizer and fine-tune for 3 epochs using the Trainer API.',
          taskSnippet: 'trainer = Trainer(\n  model=model, args=training_args, train_dataset=train_data, eval_dataset=val_data\n)',
          solutionTip: 'Use AutoModelForSequenceClassification and AutoTokenizer for seamless model swapping.'
        },
        practicalProject: {
          title: 'Financial Contract Named Entity Recognition (NER)',
          objective: 'Train a transformer model to identify contract monetary amounts, dates, party names, and termination clauses.',
          deliverable: 'Fine-tuned Hugging Face pipeline with evaluated macro F1 score.'
        },
        learningResources: [
          { title: 'Hugging Face NLP Course', type: 'guide', url: 'https://huggingface.co/learn/nlp-course' },
          { title: 'BERT Original Paper (Devlin et al.)', type: 'doc', url: 'https://arxiv.org/abs/1810.04805' }
        ]
      }
    ],
    quiz: {
      id: 'nlp-quiz',
      title: 'NLP & Language Models Assessment',
      description: 'Evaluate your knowledge of text vectorization, word embeddings, and bidirectional transformers.',
      passingScore: 70,
      questions: [
        {
          id: 'nlp-q1',
          question: 'What is the primary advantage of FastText over standard Word2Vec for handling text?',
          options: ['It uses 10x more GPU RAM', 'It breaks words into character n-grams, enabling embeddings for out-of-vocabulary and misspelled words', 'It only supports Chinese characters', 'It eliminates all punctuation'],
          correctAnswerIndex: 1,
          explanation: 'FastText represents words as sums of character n-grams, producing reliable vectors for unseen and misspelled words.'
        },
        {
          id: 'nlp-q2',
          question: 'In BERT, what does the special [CLS] token vector represent after pretraining?',
          options: ['A clear screen signal', 'An aggregate representation of the entire sequence suitable for classification tasks', 'The final punctuation mark', 'A random noise vector'],
          correctAnswerIndex: 1,
          explanation: 'The [CLS] token attends to all sequence tokens and serves as the summary representation for sentence-level classification.'
        },
        {
          id: 'nlp-q3',
          question: 'In TF-IDF, what happens to the weight of a word that appears in virtually every single document across a collection?',
          options: ['Its weight approaches zero because its IDF (Inverse Document Frequency) is minimal', 'Its weight approaches infinity', 'The word is capitalized', 'It throws a division by zero error'],
          correctAnswerIndex: 0,
          explanation: 'Words appearing across all documents have an IDF near zero, discounting their discriminative power.'
        }
      ]
    }
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data and Artificial Intelligence',
    summary: 'Transform raw enterprise data into actionable business intelligence using SQL, Excel modeling, cohort analysis, and executive KPI reporting.',
    skillLevel: 'Beginner',
    totalDurationHours: 35,
    relatedCareers: ['Data Analyst', 'Data Scientist'],
    tags: ['Analytics', 'KPIs', 'Cohort Analysis', 'Business Intelligence', 'SQL'],
    learningObjectives: [
      'Define, calculate, and monitor core business KPIs: CAC, LTV, Churn, ARR, and Net Revenue Retention',
      'Conduct retention and customer cohort analyses to identify user lifecycle milestones',
      'Perform root cause diagnostic analysis using statistical segmentation',
      'Design executive dashboards that communicate actionable insights to leadership',
      'Automate data validation routines to ensure reporting accuracy'
    ],
    modules: [
      {
        id: 'da-mod-1',
        title: 'Business Metrics, Unit Economics & KPI Frameworks',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'LTV, CAC, Payback Period, Net Promoter Score, and North Star metrics.',
        topics: ['Unit Economics: LTV to CAC Ratios', 'SaaS Metrics: ARR, MRR, Gross vs Net Churn', 'Funnel Conversion Analysis & Drop-Offs', 'North Star Metric Selection'],
        stepByStepExplanation: 'Data analytics drives strategic decisions by evaluating unit economics. A healthy SaaS company maintains an LTV:CAC ratio above 3:1 with a customer payback period under 12 months. Understanding funnel bottlenecks highlights where marketing or product optimizations yield highest ROI.',
        handsOnExercise: {
          title: 'Calculate Monthly Recurring Revenue (MRR) Waterfall',
          instructions: 'Compute New MRR, Expansion MRR, Contraction MRR, and Churned MRR from subscription transition logs.',
          taskSnippet: 'net_new_mrr = new_mrr + expansion_mrr - contraction_mrr - churned_mrr',
          solutionTip: 'Always separate organic downgrades (contraction) from total cancellations (churn) to pinpoint root causes.'
        },
        practicalProject: {
          title: 'SaaS Unit Economics & Board Deck Audit',
          objective: 'Build an executive financial model in Excel/Python forecasting 24-month cash flow and retention dynamics.',
          deliverable: 'Executive summary spreadsheet and one-page narrative memorandum.'
        },
        learningResources: [
          { title: 'Andreessen Horowitz: 16 Startup Metrics', type: 'guide', url: 'https://a16z.com/16-startup-metrics/' },
          { title: 'Reforge: Growth Loops & Metrics Guide', type: 'guide', url: 'https://www.reforge.com/blog' }
        ]
      },
      {
        id: 'da-mod-2',
        title: 'Cohort Retention Analysis & Customer Lifetime Value',
        level: 'Intermediate',
        estimatedMinutes: 85,
        overview: 'Retention curves, acquisition cohorts, triangular heatmap matrices, and churn prediction.',
        topics: ['Building Acquisition Date Cohorts', 'Triangular Retention Matrices', 'Smile Graph Retention Curves', 'Predictive LTV via Survival Analysis'],
        stepByStepExplanation: 'Cohort analysis groups users by their signup month and tracks their active usage over subsequent months. Triangular retention heatmaps illustrate whether newer cohorts retain better than older ones, revealing whether product enhancements are truly improving customer stickiness.',
        handsOnExercise: {
          title: 'Generate a Cohort Retention Heatmap in Python',
          instructions: 'Group transactional event logs by signup cohort and purchase month, calculate percentage retention, and render a heatmap.',
          taskSnippet: 'cohort_matrix = df.groupby(["cohort_month", "period"])["user_id"].nunique().unstack()',
          solutionTip: 'Normalize each row by the starting cohort size (period 0) to compute percentage retention values.'
        },
        practicalProject: {
          title: 'Subscription Mobile App Cohort Retention Diagnostic',
          objective: 'Analyze 500,000 app installs, calculate 30-day and 90-day retention curves, and present recommendations to product leadership.',
          deliverable: 'Cohort retention analysis report with interactive heatmaps.'
        },
        learningResources: [
          { title: 'Lenny’s Newsletter: Good Retention Benchmarks', type: 'guide', url: 'https://www.lennysnewsletter.com/' },
          { title: 'Mode Analytics: Advanced SQL Cohort Analysis', type: 'doc', url: 'https://mode.com/sql-tutorial/sql-business-analytics-training/' }
        ]
      },
      {
        id: 'da-mod-3',
        title: 'Diagnostic Root Cause & Prescriptive Analytics',
        level: 'Advanced',
        estimatedMinutes: 100,
        overview: 'Variance decomposition, Simpson’s Paradox, driver trees, and executive storytelling.',
        topics: ['Variance Decomposition (Price vs Volume Effect)', 'Simpson’s Paradox & Confounding Variables', 'Metric Driver Trees & Sensitivity Analysis', 'Executive Data Storytelling & Visual Scaffolding'],
        stepByStepExplanation: 'Diagnostic analytics answers "Why did it happen?". When overall metrics drop, decomposition separates price effects from volume effects. Simpson’s Paradox demonstrates that aggregated trends can reverse when examining underlying segments, emphasizing the need for granular subgroup checks.',
        handsOnExercise: {
          title: 'Diagnose a Drop in Conversion using Driver Decomposition',
          instructions: 'Decompose a 15% revenue decline across mobile versus desktop traffic to verify if mix shift drove the top-line decline.',
          taskSnippet: 'impact = (current_mix - base_mix) * base_conversion_rate',
          solutionTip: 'Always check if changing traffic acquisition mix caused an apparent drop in conversion rather than a broken page.'
        },
        practicalProject: {
          title: 'Quarterly Executive Business Review (QBR) Deck',
          objective: 'Synthesize messy marketing, sales, and churn logs into a structured 5-slide executive presentation identifying 3 growth opportunities.',
          deliverable: 'Executive slide presentation with annotations and data backing.'
        },
        learningResources: [
          { title: 'Storytelling with Data by Cole Nussbaumer Knaflic', type: 'guide', url: 'https://www.storytellingwithdata.com/' },
          { title: 'McKinsey on Problem Solving with Issue Trees', type: 'doc', url: 'https://www.mckinsey.com/' }
        ]
      }
    ],
    quiz: {
      id: 'da-quiz',
      title: 'Data Analytics & Business Metrics Assessment',
      description: 'Test your understanding of SaaS KPIs, cohort heatmaps, and diagnostic root cause analysis.',
      passingScore: 70,
      questions: [
        {
          id: 'da-q1',
          question: 'What is Simpson’s Paradox in data analytics?',
          options: ['A bug in SQL database engines', 'A phenomenon where a trend appears in different groups of data but disappears or reverses when the groups are combined', 'When charts use the wrong color', 'When data files are too large to open'],
          correctAnswerIndex: 1,
          explanation: 'Simpson’s paradox occurs when confounding factors cause aggregated metrics to reverse subgroup realities.'
        },
        {
          id: 'da-q2',
          question: 'In SaaS business analytics, how is Net Revenue Retention (NRR) calculated?',
          options: ['(Beginning ARR + Expansion - Contraction - Churn) / Beginning ARR * 100', 'Revenue minus cost of goods sold only', 'Number of new signups divided by page views', 'Marketing budget divided by headcount'],
          correctAnswerIndex: 0,
          explanation: 'NRR evaluates revenue retention from existing customers inclusive of upgrades, downgrades, and churn.'
        },
        {
          id: 'da-q3',
          question: 'Why are triangular cohort retention heatmaps invaluable for product teams?',
          options: ['They render 3D pie charts', 'They show whether customer retention is improving over successive calendar cohorts', 'They replace all SQL queries', 'They guarantee zero churn'],
          correctAnswerIndex: 1,
          explanation: 'Tracking cohorts over time reveals whether recent product updates have actually made customers retain longer.'
        }
      ]
    }
  },
  {
    id: 'sql-database-management',
    title: 'SQL and Database Management',
    category: 'Data and Artificial Intelligence',
    summary: 'Master relational database architecture, complex SQL queries, window functions, indexing, and PostgreSQL administration.',
    skillLevel: 'Beginner',
    totalDurationHours: 40,
    relatedCareers: ['Data Analyst', 'Data Scientist', 'Backend Development', 'Full Stack Developer'],
    tags: ['SQL', 'PostgreSQL', 'Window Functions', 'Indexing', 'Normalization', 'CTEs'],
    learningObjectives: [
      'Write advanced SQL queries with CTEs, subqueries, and window functions (RANK, DENSE_RANK, LEAD, LAG)',
      'Design normalized database schemas adhering to 1NF, 2NF, 3NF, and BCNF',
      'Optimize query execution plans with targeted indexing, partition pruning, and VACUUM maintenance',
      'Manage database transactions and concurrency with ACID isolation levels',
      'Implement database security, role-based grants, and backup restoration procedures'
    ],
    modules: [
      {
        id: 'sql-mod-1',
        title: 'Core SQL, Joins & Aggregations',
        level: 'Beginner',
        estimatedMinutes: 75,
        overview: 'SELECT queries, INNER/LEFT/FULL joins, GROUP BY, HAVING, and set operations (UNION/INTERSECT).',
        topics: ['Relational Algebra & Set Operations', 'INNER vs LEFT vs FULL OUTER Joins', 'GROUP BY & HAVING Filtering Rules', 'Subqueries vs Common Table Expressions (CTEs)'],
        stepByStepExplanation: 'SQL executes queries in a specific logical order: FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT. The WHERE clause filters raw rows before aggregation, whereas HAVING filters grouped rows after aggregation.',
        handsOnExercise: {
          title: 'Find Customers with Multi-Order Totals Exceeding $1,000',
          instructions: 'Join customers with orders, aggregate total purchase value, and filter using HAVING for totals above $1,000.',
          taskSnippet: 'SELECT c.id, c.name, SUM(o.total) AS total_spend\nFROM customers c JOIN orders o ON c.id = o.customer_id\nGROUP BY c.id, c.name HAVING SUM(o.total) > 1000;',
          solutionTip: 'Always include the primary key column in the GROUP BY clause to ensure non-ambiguous group resolution.'
        },
        practicalProject: {
          title: 'E-Commerce Analytical Query Suite',
          objective: 'Write 10 production SQL queries extracting top sales reps, abandoned carts, average order values, and inventory alerts.',
          deliverable: 'SQL script file tested against a populated PostgreSQL database.'
        },
        learningResources: [
          { title: 'PostgreSQL Official Documentation', type: 'doc', url: 'https://www.postgresql.org/docs/' },
          { title: 'SQLZoo Interactive Tutorials', type: 'guide', url: 'https://sqlzoo.net/' }
        ]
      },
      {
        id: 'sql-mod-2',
        title: 'Window Functions & Advanced Analytical SQL',
        level: 'Intermediate',
        estimatedMinutes: 90,
        overview: 'OVER (PARTITION BY ... ORDER BY), ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, and running totals.',
        topics: ['Window Frame Clauses (ROWS BETWEEN UNBOUNDED PRECEDING...)', 'ROW_NUMBER vs RANK vs DENSE_RANK', 'LAG & LEAD for Month-over-Month Growth', 'Cumulative Running Totals & Moving Averages'],
        stepByStepExplanation: 'Unlike GROUP BY which collapses multiple rows into a single summary row, Window Functions compute calculations across a set of rows while preserving the identity of each individual row in the result set.',
        handsOnExercise: {
          title: 'Compute Month-over-Month Revenue Growth with LAG',
          instructions: 'Use CTE and LAG() window function to calculate monthly revenue and the percentage change compared to the preceding month.',
          taskSnippet: 'SELECT month, revenue, ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month), 2) AS mom_growth\nFROM monthly_rev;',
          solutionTip: 'Wrap initial aggregations in a CTE before applying window functions to maintain readability.'
        },
        practicalProject: {
          title: 'SaaS User Engagement Streak & Churn SQL Engine',
          objective: 'Calculate consecutive daily login streaks for 50,000 users using window functions and date arithmetic.',
          deliverable: 'Optimized SQL script using recursive CTEs and windowing.'
        },
        learningResources: [
          { title: 'Mode Analytics: Window Functions Tutorial', type: 'guide', url: 'https://mode.com/sql-tutorial/sql-window-functions/' },
          { title: 'Modern SQL: Window Function Guide', type: 'doc', url: 'https://modern-sql.com/feature/over' }
        ]
      },
      {
        id: 'sql-mod-3',
        title: 'Indexing, Query Plans & PostgreSQL Tuning',
        level: 'Advanced',
        estimatedMinutes: 110,
        overview: 'EXPLAIN ANALYZE, B-Tree vs GIN indexes, partial indexes, table partitioning, and connection tuning.',
        topics: ['EXPLAIN (ANALYZE, BUFFERS) Plan Reading', 'B-Tree, GIN & BRIN Indexes', 'Partial & Expression Indexes', 'Declarative Table Partitioning (RANGE / LIST)'],
        stepByStepExplanation: 'EXPLAIN ANALYZE executes the query and reports actual execution time and buffer cache hits. A Seq Scan on a million-row table indicates missing indexes. Partial indexes (e.g. WHERE status = "pending") save disk space and provide high lookup speed for skewed datasets.',
        handsOnExercise: {
          title: 'Optimize a Search Query with GIN Index on JSONB',
          instructions: 'Create a GIN index on a JSONB column containing user attributes and write a containment query using the @> operator.',
          taskSnippet: 'CREATE INDEX idx_users_meta_gin ON users USING GIN (metadata);\nSELECT * FROM users WHERE metadata @> \'{"role": "admin"}\';',
          solutionTip: 'GIN (Generalized Inverted Index) is ideal for JSONB and array containment searches.'
        },
        practicalProject: {
          title: 'High-Volume Financial Audit Database Optimization',
          objective: 'Partition a 20-million-row audit log table by month, configure composite indexes, and reduce query execution time from 4.2s to 12ms.',
          deliverable: 'Benchmark report with EXPLAIN ANALYZE comparison outputs.'
        },
        learningResources: [
          { title: 'Use The Index, Luke!', type: 'guide', url: 'https://use-the-index-luke.com/' },
          { title: 'PostgreSQL Performance Tuning Guide', type: 'doc', url: 'https://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server' }
        ]
      }
    ],
    quiz: {
      id: 'sql-quiz',
      title: 'SQL & Database Architecture Assessment',
      description: 'Test your understanding of query execution orders, window functions, and indexing strategies.',
      passingScore: 70,
      questions: [
        {
          id: 'sql-q1',
          question: 'What is the fundamental difference between RANK() and DENSE_RANK() in SQL window functions?',
          options: ['RANK() creates random numbers, while DENSE_RANK() sorts descending', 'RANK() skips rank numbers after ties (e.g. 1, 2, 2, 4), whereas DENSE_RANK() does not leave gaps (e.g. 1, 2, 2, 3)', 'DENSE_RANK() only works on text strings', 'There is no difference'],
          correctAnswerIndex: 1,
          explanation: 'RANK leaves gaps following tied rows, whereas DENSE_RANK assigns consecutive numbers without gaps.'
        },
        {
          id: 'sql-q2',
          question: 'In standard SQL processing order, when is the WHERE clause evaluated relative to the GROUP BY clause?',
          options: ['After the HAVING clause', 'Before the GROUP BY clause (filtering rows before grouping takes place)', 'After the ORDER BY clause', 'Simultaneously with LIMIT'],
          correctAnswerIndex: 1,
          explanation: 'WHERE filters rows before grouping; HAVING filters rows after grouping.'
        },
        {
          id: 'sql-q3',
          question: 'When is a PostgreSQL partial index (e.g. CREATE INDEX ... WHERE active = true) preferred over a regular index?',
          options: ['When all values in the column are identical', 'When you frequently query only a specific subset of rows (e.g. active records), saving index space and write overhead', 'When tables have no primary keys', 'When using NoSQL'],
          correctAnswerIndex: 1,
          explanation: 'Partial indexes only index rows satisfying a condition, drastically reducing index size and update costs.'
        }
      ]
    }
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    category: 'Data and Artificial Intelligence',
    summary: 'Design impactful data graphics, interactive dashboards, chart selection methodologies, and human visual perception principles.',
    skillLevel: 'Beginner',
    totalDurationHours: 34,
    relatedCareers: ['Data Analyst', 'Data Scientist', 'UI/UX Designer'],
    tags: ['Visualization', 'Tableau', 'PowerBI', 'D3.js', 'Chart Chooser', 'Perception'],
    learningObjectives: [
      'Apply Gestalt principles and preattentive visual attributes (color, position, size, orientation) to charts',
      'Select the exact appropriate chart type for distributions, correlations, time series, and geospatial data',
      'Eliminate chart junk, deceptive 3D elements, and secondary axis visual illusions',
      'Build responsive, accessible interactive charts using modern visualization libraries',
      'Construct dashboards that guide executive attention to critical operational decisions'
    ],
    modules: [
      {
        id: 'dv-mod-1',
        title: 'Visual Perception, Gestalt Principles & Chart Selection',
        level: 'Beginner',
        estimatedMinutes: 70,
        overview: 'Preattentive attributes, color theory, Gestalt laws (proximity, similarity, enclosure), and chart taxonomy.',
        topics: ['Preattentive Visual Attributes', 'The Chart Chooser Framework (Comparison, Distribution, Composition, Relationship)', 'Color Palette Selection (Sequential, Diverging, Categorical)', 'Colorblind Accessibility (WCAG 2.1)'],
        stepByStepExplanation: 'The human visual cortex processes preattentive attributes (color hue, spatial position, line length) in under 200 milliseconds. Effective visualization uses spatial position for the most important metric and reserves saturated color for the primary focal point, avoiding rainbow color schemes that create cognitive overload.',
        handsOnExercise: {
          title: 'Redesign a Cluttered Pie Chart into an Annotated Bar Chart',
          instructions: 'Convert a 12-slice 3D pie chart into a horizontal bar chart sorted by value with direct data labels and an emphasized top performer.',
          taskSnippet: 'plt.barh(categories, values, color=["#3B82F6" if v==max(values) else "#CBD5E1" for v in values])',
          solutionTip: 'Sorting bars in descending order makes differences between categories immediately clear.'
        },
        practicalProject: {
          title: 'Corporate Financial Chart Redesign Portfolio',
          objective: 'Identify three poorly constructed real-world corporate charts, diagnose design flaws, and rebuild them using best practices.',
          deliverable: 'Before/after case study presentation highlighting cognitive clarity.'
        },
        learningResources: [
          { title: 'Financial Times Visual Vocabulary', type: 'guide', url: 'https://github.com/Financial-Times/chart-vocabulary' },
          { title: 'ColorBrewer: Color Advice for Cartography', type: 'doc', url: 'https://colorbrewer2.org/' }
        ]
      },
      {
        id: 'dv-mod-2',
        title: 'Interactive Dashboard UX & Information Hierarchy',
        level: 'Intermediate',
        estimatedMinutes: 85,
        overview: 'Dashboard layouts (Z-pattern, F-pattern), progressive disclosure, filters, and drill-downs.',
        topics: ['Dashboard Information Architecture', '5-Second Rule for Dashboard Comprehension', 'Synchronized Filtering & Cross-Highlighting', 'Mobile-Responsive Chart Adaptation'],
        stepByStepExplanation: 'Dashboards must pass the 5-second rule: an executive should understand the status within 5 seconds. Place key KPI headline cards at the top left following natural reading patterns. Use synchronized cross-filtering to let users explore deeper without leaving the main page.',
        handsOnExercise: {
          title: 'Design an Executive Sales Performance Dashboard',
          instructions: 'Layout a dashboard wireframe in Figma or Tableau with headline metrics, a time-series trend line, and a regional drill-down map.',
          taskSnippet: '// Structure: 3 KPI Cards Top -> 1 Main Line Chart Center -> 2 Breakdown Columns Bottom',
          solutionTip: 'Limit any single dashboard view to 4 to 6 charts to prevent visual fatigue.'
        },
        practicalProject: {
          title: 'Hospital ICU Patient Flow Interactive Dashboard',
          objective: 'Build an interactive dashboard monitoring bed occupancy, wait times, and staffing levels with automated alert thresholds.',
          deliverable: 'Interactive dashboard project published with sample data.'
        },
        learningResources: [
          { title: 'Stephen Few: Information Dashboard Design', type: 'guide', url: 'https://www.stephen-few.com/' },
          { title: 'Tableau Visual Best Practices Guide', type: 'doc', url: 'https://help.tableau.com/current/blueprint/en-us/bp_visual_best_practices.htm' }
        ]
      },
      {
        id: 'dv-mod-3',
        title: 'Custom Web Visualizations with D3.js & SVG',
        level: 'Advanced',
        estimatedMinutes: 105,
        overview: 'D3 data binding, SVG path generators, scales, force-directed graphs, and smooth transitions.',
        topics: ['D3 Selection & Join (.data().join())', 'D3 Scale Linear, Time & Ordinal', 'SVG Paths & Arc Generators for Radial Charts', 'Canvas vs SVG Rendering Performance'],
        stepByStepExplanation: 'D3.js binds data directly to the DOM. SVG handles vector graphics crisp at any resolution with CSS styling, while HTML5 Canvas is preferred when rendering more than 10,000 distinct data points with high frame rates.',
        handsOnExercise: {
          title: 'Create an Animated D3.js Scatter Plot with Scales',
          instructions: 'Bind 200 data points to SVG circle elements with d3.scaleLinear, enter/update joins, and animated transitions on data reload.',
          taskSnippet: 'svg.selectAll("circle").data(data).join("circle").transition().duration(500).attr("cx", d => x(d.x));',
          solutionTip: 'Always use .join() pattern introduced in modern D3 v5+ to handle enter, update, and exit selections smoothly.'
        },
        practicalProject: {
          title: 'Interactive Global Climate Warming Spiral',
          objective: 'Build a D3.js visualization animating monthly temperature anomalies radially over the past 140 years.',
          deliverable: 'Web-hosted D3 visualization with play/pause controls.'
        },
        learningResources: [
          { title: 'D3.js Official Documentation & Gallery', type: 'doc', url: 'https://d3js.org/' },
          { title: 'Observable: Interactive D3 Examples', type: 'guide', url: 'https://observablehq.com/@d3' }
        ]
      }
    ],
    quiz: {
      id: 'dv-quiz',
      title: 'Data Visualization Assessment',
      description: 'Evaluate your knowledge of visual perception, chart selection, and dashboard UX.',
      passingScore: 70,
      questions: [
        {
          id: 'dv-q1',
          question: 'Which visual attribute is processed most accurately by the human visual cortex for quantitative comparisons?',
          options: ['2D Position along a common scale', 'Color saturation', 'Area of a 2D shape', 'Curvature angle'],
          correctAnswerIndex: 0,
          explanation: 'Empirical studies (Cleveland & McGill) prove spatial position along a common scale is decoded with highest accuracy.'
        },
        {
          id: 'dv-q2',
          question: 'Why are 3D bar charts and 3D pie charts considered anti-patterns in data visualization?',
          options: ['Browsers cannot render 3D', 'Perspective distortion warps the true visual area and makes height/angle comparison inaccurate', 'They take 10GB of memory', 'They are only allowed in gaming'],
          correctAnswerIndex: 1,
          explanation: '3D perspective distorts angles and bars, introducing optical illusions that misrepresent the underlying data.'
        },
        {
          id: 'dv-q3',
          question: 'When should a Diverging color palette be used instead of a Sequential palette?',
          options: ['When data has a critical meaningful midpoint (e.g. zero, budget target, or neutral sentiment) with extremes in both directions', 'Only for binary Yes/No values', 'When printing on black and white paper', 'For categorical product names'],
          correctAnswerIndex: 0,
          explanation: 'Diverging palettes highlight deviations above and below a central baseline (e.g., profit vs loss).'
        }
      ]
    }
  }
];
