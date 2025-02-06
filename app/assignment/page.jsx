import DebuggingChallenges from "../component/debugging";
import Navbar from "../component/navbar";

export default function Assignment() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="mt-10 p-5">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          AI Assignment
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Machine Learning
            </h2>
            <p className="text-gray-600 mt-2">
              Machine Learning (ML) is a subset of Artificial Intelligence (AI)
              that enables systems to learn from data and improve their
              performance without being explicitly programmed. ML models use
              algorithms to analyze patterns in historical data, allowing them
              to make predictions or decisions on new data. Applications of ML
              include image recognition, natural language processing, and
              recommendation systems.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Artificial Intelligence
            </h2>
            <p className="text-gray-600 mt-2">
              Artificial Intelligence (AI) refers to the development of systems
              that can perform tasks typically requiring human intelligence.
              These tasks include reasoning, problem-solving, decision-making,
              and understanding language. AI is divided into various branches,
              including Machine Learning, robotics, and expert systems.
              Real-world applications include virtual assistants, autonomous
              vehicles, and fraud detection.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Supervised Learning
            </h2>
            <p className="text-gray-600 mt-2">
              Supervised Learning is a type of Machine Learning where models are
              trained on labeled datasets. Each data point in the training set
              includes both input features and a corresponding output (label).
              The model learns to map inputs to outputs and uses this mapping to
              make predictions on new data. Examples of supervised learning
              algorithms include linear regression, decision trees, and support
              vector machines. Common applications include spam detection, stock
              price prediction, and image classification.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Unsupervised Learning
            </h2>
            <p className="text-gray-600 mt-2">
              Unsupervised Learning deals with unlabeled data. The goal is to
              find hidden patterns, groupings, or relationships in the data
              without predefined labels. Algorithms such as k-means clustering
              and principal component analysis (PCA) are commonly used in
              unsupervised learning. Applications include market segmentation,
              anomaly detection, and recommendation systems.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Deep Learning
            </h2>
            <p className="text-gray-600 mt-2">
              Deep Learning is a specialized branch of Machine Learning that
              focuses on neural networks with multiple layers, often referred to
              as deep neural networks. These networks attempt to mimic the
              workings of the human brain in processing complex data such as
              images, speech, and text. Deep Learning has driven breakthroughs
              in fields like computer vision, natural language understanding,
              and generative AI. Notable frameworks for deep learning include
              TensorFlow, PyTorch, and Keras.
            </p>
          </section>
        </div>

        {/* Assignment 2 - Debugging Challenges */}
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center mt-10">
          Assignment 2: Debugging Challenges
        </h1>
        <DebuggingChallenges />
      </main>
    </div>
  );
}
