/**
 * Summary for Project Conversational Agents (XB_0101)
 * Covers: Git/GitHub, ML Basics, Deep Neural Networks, Dialogue Systems Pipeline,
 * NLU with BERT, Hugging Face Transformers, HTML/Bootstrap, and Prolog
 */
export const projectConversationalAgentsSummary = `
# Project Conversational Agents (XB_0101) - Complete Summary

## Table of Contents
1. [Course Overview](#course-overview)
2. [Git and GitHub](#git-and-github)
3. [Machine Learning Basics](#machine-learning-basics)
4. [Deep Neural Networks](#deep-neural-networks)
5. [Dialogue Systems Pipeline](#dialogue-systems-pipeline)
6. [Natural Language Understanding with BERT](#natural-language-understanding-with-bert)
7. [Hugging Face Transformers](#hugging-face-transformers)
8. [HTML and Bootstrap](#html-and-bootstrap)
9. [Prolog for Dialogue Management](#prolog-for-dialogue-management)

---

## Course Overview

This course involves building a **speech-based conversational recipe recommendation agent**. The agent helps users find recipes based on preferences (cuisine, ingredients, meal type, duration, etc.) through spoken dialogue.

### Grade Composition
| Component | Weight |
|-----------|--------|
| Basic Agent | 30% |
| Extensions | 20% |
| Written Report | 35% |
| Exam | 15% |

### Exam Details
- 30 multiple-choice questions
- Based on Preliminaries + Lectures 1-3
- Worth 15% of the final grade

### Key Qualities of a Good Conversational Agent
- **Conversational**: Natural dialogue flow, repair mechanisms, appropriate responses
- **Effective**: Successfully completes tasks (recipe recommendation)
- **Efficient**: Minimizes unnecessary turns
- **User Experience**: Intuitive interface, clear feedback
- **Robust**: Handles misunderstandings, out-of-scope queries, and errors gracefully

---

## Git and GitHub

### Why Git Matters for This Project
The conversational agent is developed collaboratively using **GitHub Classroom**. All code, MARBEL agent files, and NLU models are version-controlled. The final agent must be on your GitHub repository -- no separate submission needed for code.

### Essential Git Commands

\`\`\`bash
# Clone the GitHub Classroom repository
git clone <repository-url>

# Basic workflow
git status              # Check current state
git add <file>           # Stage specific files
git commit -m "message"  # Commit changes
git push                 # Push to remote
git pull                 # Pull latest changes

# Branching (essential for team collaboration)
git branch <branch-name>       # Create a new branch
git checkout <branch-name>     # Switch to branch
git checkout -b <branch-name>  # Create and switch
git merge <branch-name>        # Merge branch into current

# Resolving merge conflicts
git diff                 # See conflicting changes
# Edit files to resolve conflicts, then:
git add <resolved-files>
git commit -m "Resolve merge conflicts"
\`\`\`

### .gitignore Best Practices
Common entries for this project:
\`\`\`
# Python
__pycache__/
*.pyc
*.pyo
venv/
.env

# Model checkpoints (large files)
*.pt
checkpoints/

# IDE
.idea/
.vscode/
*.iml

# OS
.DS_Store
Thumbs.db
\`\`\`

### Common Issues from the Course
- **Branch merge conflicts**: Occur when files that should be in \`.gitignore\` are tracked (e.g., IDE-specific files, compiled outputs)
- **Team coordination**: If using \`sounddevice\` fix files, either add them to \`.gitignore\` or agree as a team to use the new scripts

---

## Machine Learning Basics

### What is Machine Learning?
Machine learning is about extracting patterns from data. In this course, ML is used primarily for **Natural Language Understanding (NLU)** -- classifying user intents and extracting slots from utterances.

### Supervised Learning Pipeline
1. **Data Collection**: Gather labeled examples (utterances with intent labels and slot annotations)
2. **Preprocessing**: Tokenization, encoding, padding
3. **Training**: Optimize model parameters by minimizing a loss function
4. **Evaluation**: Measure performance on held-out test data
5. **Inference**: Deploy model to make predictions on new inputs

### Training Loop (Neural Networks)

\`\`\`python
# Conceptual training loop
for epoch in range(num_epochs):
    for batch in dataloader:
        # 1. Forward Pass: input flows through model
        predictions = model(batch.inputs)

        # 2. Loss Calculation: compare predictions to ground truth
        loss = loss_function(predictions, batch.labels)

        # 3. Backward Pass (Backpropagation): compute gradients
        loss.backward()

        # 4. Update Weights: adjust parameters
        optimizer.step()
        optimizer.zero_grad()

    print(f"Epoch {epoch}, Loss: {loss.item()}")
\`\`\`

### Key Concepts
- **Parameters (Weights)**: \`W = {[w1, w2, w3], b}\` -- values the model learns
- **Loss Function**: Measures the difference between predicted labels (y-hat) and ground truth labels (y)
- **Backpropagation**: Algorithm to compute gradients and update weights
- **Optimizer**: Algorithm that determines how weights are updated (e.g., Adam)
- **Learning Rate**: Controls the step size during optimization
- **Epochs**: Number of full passes through the training dataset
- **Batch Size**: Number of samples processed before updating weights

### Evaluation Metrics
| Metric | Description |
|--------|-------------|
| **Accuracy** | Percentage of correct predictions |
| **Precision** | Of all predicted positives, how many are actually positive |
| **Recall** | Of all actual positives, how many are correctly identified |
| **F1-Score** | Harmonic mean of precision and recall |

### Hyperparameter Tuning Categories
- **Hyperparameters**: Learning Rate, Number of Epochs, Batch Size, Optimizer, Dropout Rate, Maximum Sequence Length
- **Architecture**: Add Dropout, Dense Layers, Attention for Slot Filling, CRF for Slot Tagging
- **Data**: Handle Imbalance, Domain-Specific Tokenization, Data Augmentation, Dynamic Padding, BIO Tagging improvements
- **Training**: Fine-Tune Pre-Trained BERT, Class Weights, Learning Rate Scheduler, Weight Decay, Gradient Clipping

---

## Deep Neural Networks

### From Neurons to Networks
A neural network consists of layers of interconnected neurons. Each neuron computes:

\`\`\`
y-hat = w1*x1 + w2*x2 + w3*x3 + b
      = w^T * x + b
\`\`\`

Where \`W = {[w1, w2, w3], b}\` are learnable parameters (weights and bias).

### The Transformer Architecture
The Transformer (Vaswani et al., 2017, "Attention Is All You Need") is the foundation for modern NLU models like BERT and Whisper.

#### Key Components:

**Self-Attention Mechanism**:
- Computes relationships between all tokens in a sequence simultaneously
- Uses three matrices: **Query (Q)**, **Key (K)**, **Value (V)**
- Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) * V
- Allows the model to focus on relevant parts of the input

**Multi-Head Attention**:
- Runs multiple attention operations in parallel
- Each "head" can attend to different types of relationships
- Outputs are concatenated and projected

**Encoder Block** (used in BERT):
- Multi-Head Self-Attention
- Add & Normalize (residual connection)
- Feed-Forward Network
- Add & Normalize

**Input Representation**:
- **Token Embeddings**: Convert tokens to dense vectors
- **Positional Encoding**: Encode position information (since attention has no inherent order)

### Categories of Pretrained Transformers
| Category | Architecture | Examples | Use Case |
|----------|-------------|----------|----------|
| Encoder-only | Encoder | BERT, RoBERTa | Classification, NLU |
| Decoder-only | Decoder | GPT, LLaMA | Text generation |
| Encoder-Decoder | Full Transformer | T5, Whisper | Translation, ASR |

---

## Dialogue Systems Pipeline

### Pipeline Architecture
The conversational agent follows this pipeline:

\`\`\`
User Speech -> ASR -> NLU -> DM -> NLG -> TTS -> Agent Speech
                                    |
                                    v
                              Web Generator (WG)
\`\`\`

| Component | Function | Implementation |
|-----------|----------|---------------|
| **ASR** (Automatic Speech Recognition) | Speech to text | Whisper (OpenAI) or Google STT |
| **NLU** (Natural Language Understanding) | Text to intent + slots | BERT-based classifier or Dialogflow |
| **DM** (Dialogue Manager) | Decides next action | MARBEL agent (Prolog-based) |
| **NLG** (Natural Language Generation) | Generates response text | Prolog responses.pl |
| **TTS** (Text-to-Speech) | Text to speech | Google TTS or espeak |
| **WG** (Web Generator) | Visual interface | HTML/Bootstrap webserver |

### System Architecture (SIC-based)

\`\`\`
Continuous stream:
  Microphone Sensor -> Whisper-ASR Service -> BERT-NLU Service
                              |                     |
                         Redis Server          Redis Server
                              |                     |
                    Application control (SICApplication)
                              |
                        MARBEL Agent
\`\`\`

### Running the Pipeline
\`\`\`bash
# 1. Start Redis server
cd sic_applications
redis-server conf/redis/redis.conf

# 2. Run ASR (choose one)
run-google-stt    # Google Speech-to-Text
run-whisper       # OpenAI Whisper

# 3. Run NLU
run-nlu

# 4. Run Webserver
run-webserver

# 5. Start Framework
start-framework

# 6. Run EIS (External Interface Service)
run-eis                # Default (Dialogflow)
run-eis --use-nlu      # Use your BERT NLU model
run-eis --use-whisper   # Use Whisper ASR
run-eis --no-espeak     # Use Google TTS instead of espeak
\`\`\`

### Whisper ASR (OpenAI)
- **Architecture**: Encoder-Decoder Transformer
- **Training Data**: 680,000 hours of supervised audio data
- **Input**: Log-Mel Spectrogram (audio representation)
- **Output**: Text transcript
- **Available on SIC-v2**: Integrated into the pipeline

### Google Dialogflow (Alternative NLU)
Dialogflow is a cloud-based NLU service that acts as a **black box** for intent matching.

**Setup Steps**:
1. Create an agent in Dialogflow console
2. Create a Google Cloud service account
3. Download the JSON key file
4. Set \`GOOGLE_APPLICATION_CREDENTIALS\` environment variable

**Intent Matching in Dialogflow**:
1. Create an intent with a **label**
2. Add **training phrases** (example utterances, at least 10-20)
3. Fill the **Action field** with the intent label the DM will use
4. Save (Dialogflow trains a model automatically)

**Two Matching Algorithms**:
| Rule-based Grammar | Machine Learning |
|-------------------|-----------------|
| Few examples needed | Many examples needed |
| Verbatim matching | Fuzzy/similar matching |
| Confidence score = 1 | Confidence score < 1 |

**ML Classification Threshold**: Default is 0.3 (quite low). If no intent meets the threshold, the **fallback intent** is triggered.

**Entities in Dialogflow**: Extract specific information from utterances (e.g., tea type, ingredient). Define custom entities with synonyms for domain-specific values.

### Data Flow: ASR+NLU to MARBEL
| Data Item | Description | Usage |
|-----------|-------------|-------|
| Intent Name | Detected goal (e.g., "addFilter") | Triggers actions/percepts in MARBEL |
| Entities (Slots) | Key-value pairs (e.g., cuisine=Japanese) | Provides specific parameters |
| Transcript | Raw text from user | Displayed on webserver |
| Confidence Scores | NLU confidence (0.0-1.0) | Determines trust in result |
| Source Type | Speech or text input | Adds context |

---

## Natural Language Understanding with BERT

### BERT Overview
**BERT** (Bidirectional Encoder Representations from Transformers) by Google is a **pretrained language model** that provides context-aware word representations.

Key properties:
- **Bidirectional**: Processes the entire input at once (not left-to-right)
- **Pretrained**: Self-supervised learning on large unlabeled text corpora
- **Fine-tuned**: Adapted to specific downstream tasks with labeled data

### BERT Pretraining Tasks
1. **Masked Language Model (MLM)**: Randomly mask 15% of tokens, predict the masked tokens
2. **Next Sentence Prediction (NSP)**: Predict whether sentence B follows sentence A

### NLU Task: Intent Classification + Slot Filling
The NLU model performs **two tasks simultaneously** using a shared BERT encoder:

#### Intent Classification
- **Input**: Pooled output from BERT (\`[CLS]\` token representation)
- **Architecture**: Linear layer mapping hidden_size -> number of intents
- **Output**: Distribution vector over all intent classes

\`\`\`python
# Intent classifier head
class IntentClassifier(nn.Module):
    def __init__(self, hidden_size, num_intents):
        super().__init__()
        self.linear = nn.Linear(hidden_size, num_intents)

    def forward(self, pooled_output):
        return self.linear(pooled_output)
        # Output shape: (batch_size, num_intents)
\`\`\`

Example intents for the recipe agent:
| Index | Intent |
|-------|--------|
| 0 | addFilter |
| 1 | appreciation |
| 2 | bot_challenge |
| 3 | deny |
| 4 | farewell |
| ... | ... |
| 13 | restart |

#### Slot Filling (Entity Extraction)
- **Input**: Last hidden state embeddings for each token
- **Architecture**: Linear layer mapping hidden_size -> number of slot labels
- **Output**: Distribution matrix of slot labels per token

\`\`\`python
# Slot classifier head
class SlotClassifier(nn.Module):
    def __init__(self, hidden_size, num_slot_labels):
        super().__init__()
        self.linear = nn.Linear(hidden_size, num_slot_labels)

    def forward(self, hidden_states):
        return self.linear(hidden_states)
        # Output shape: (batch_size, seq_len, num_slot_labels)
\`\`\`

#### BIO Format for Slot Labeling
| Tag | Meaning | Example |
|-----|---------|---------|
| B-{slot} | Beginning of a slot entity | B-cuisine |
| I-{slot} | Inside (continuation) of a slot entity | I-cuisine |
| O | Outside any slot entity | O |

Example:
\`\`\`
Input:  "Find me a Japanese recipe for lunch"
Slots:   O    O  O B-cuisine  O     O  B-mealType
\`\`\`

### Combined Architecture
Both classifiers share one BERT encoder base:

\`\`\`
Input: [CLS] How to cook an Italian pasta [EOS]
         |                              |
    BERT Encoder (shared)          BERT Encoder
         |                              |
   [CLS] pooled output      Token hidden states
         |                              |
   Intent Classifier          Slot Classifier
         |                              |
   addFilter (0.86)     O O O O B-cuisine I-cuisine O
\`\`\`

### Ontology
The ontology is a JSON file defining all possible intents and slots with synonym normalization:

\`\`\`json
{
  "intents": ["addFilter", "appreciation", "deny", "farewell", ...],
  "slots": {
    "ingredient": ["garlic", "chicken", "pasta", ...],
    "cuisine": ["italian", "japanese", "french", ...],
    "mealType": ["lunch", "dinner", "breakfast", ...],
    "duration": ["fast", "slow", ...]
  },
  "synonyms": {
    "pasta": ["noodles", "spaghetti"],
    "fast": ["quick", "easy"]
  }
}
\`\`\`

### Dataset Preparation Pipeline
1. **Tokenization**: Use BERT tokenizer to split text into subword tokens
2. **Intent Label Encoding**: Map intent strings to integer indices
3. **Slot Label Encoding**: Convert BIO tags to integer indices, handle subword alignment
4. **Padding/Truncation**: Ensure uniform sequence length across batch

\`\`\`python
from transformers import BertTokenizer

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Tokenize an utterance
text = "Find me a Japanese recipe for lunch"
tokens = tokenizer.tokenize(text)
# ['find', 'me', 'a', 'japanese', 'recipe', 'for', 'lunch']

input_ids = tokenizer.encode(text, add_special_tokens=True)
# [101, 2424, 2033, 1037, 3700, 5765, 2005, 6671, 102]
# 101 = [CLS], 102 = [SEP]
\`\`\`

### NLU Project Structure
\`\`\`
utils/
|-- checkpoints/          # Trained model checkpoints
|-- data/
|   |-- ontology.json     # Intents, slots, and synonyms
|   |-- train.json        # Training dataset
|   |-- test.json         # Test dataset
|   |-- synonyms.json     # Slot normalization
|-- data_processing.py    # Data preprocessing utilities
|-- dataset.py            # Dataset preparation and preprocessing
|-- evaluation.py         # Model evaluation and metrics
|-- run_train_test.py     # Main script for training/evaluation/inference
|-- model.py              # BERT-based model architecture
|-- predict.py            # Inference module
|-- train.py              # Training module
|-- utils.py              # Argument parsing, slot normalization, synonym resolution
\`\`\`

### Inference Example
\`\`\`
Input:  "Find me a Japanese recipe for lunch."
Output: addFilter 0.9828  {'cuisine': 'japanese', 'mealType': 'lunch'}
\`\`\`

### Model Improvement Strategies
- **Data**: Handle class imbalance, data augmentation, improve BIO tagging
- **Architecture**: Add dropout, dense layers, attention for slot filling, CRF layer
- **Training**: Fine-tune BERT, use class weights, learning rate scheduler, gradient clipping
- **Hyperparameters**: Tune learning rate, epochs, batch size, dropout rate

---

## Hugging Face Transformers

### Overview
Hugging Face provides the \`transformers\` library used to load and fine-tune pretrained models like BERT for the NLU component.

### Key Classes

\`\`\`python
from transformers import (
    BertModel,           # Base BERT model (encoder)
    BertTokenizer,       # BERT-specific tokenizer
    BertConfig,          # Model configuration
    AdamW,               # Optimizer with weight decay
)

# Load pretrained BERT
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
bert_model = BertModel.from_pretrained(model_name)

# Configuration
config = BertConfig.from_pretrained(model_name)
print(config.hidden_size)    # 768 (base) or 1024 (large)
print(config.num_attention_heads)  # 12 (base) or 16 (large)
\`\`\`

### Building a Custom NLU Model with Hugging Face

\`\`\`python
import torch
import torch.nn as nn
from transformers import BertModel

class BERTNLUModel(nn.Module):
    """Joint Intent Classification and Slot Filling model."""

    def __init__(self, model_name, num_intents, num_slot_labels,
                 dropout_rate=0.1):
        super().__init__()
        self.bert = BertModel.from_pretrained(model_name)
        self.dropout = nn.Dropout(dropout_rate)

        hidden_size = self.bert.config.hidden_size

        # Intent classifier uses [CLS] token
        self.intent_classifier = nn.Linear(hidden_size, num_intents)

        # Slot classifier uses all token hidden states
        self.slot_classifier = nn.Linear(hidden_size, num_slot_labels)

    def forward(self, input_ids, attention_mask, token_type_ids=None):
        outputs = self.bert(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids
        )

        # Intent: use pooled output ([CLS] representation)
        pooled_output = outputs.pooler_output  # (batch, hidden)
        pooled_output = self.dropout(pooled_output)
        intent_logits = self.intent_classifier(pooled_output)

        # Slots: use last hidden state (all tokens)
        sequence_output = outputs.last_hidden_state  # (batch, seq, hidden)
        sequence_output = self.dropout(sequence_output)
        slot_logits = self.slot_classifier(sequence_output)

        return intent_logits, slot_logits
\`\`\`

### Training Function Structure

\`\`\`python
import torch
from torch.utils.data import DataLoader

def train_model(model, dataset, num_epochs=5, batch_size=32,
                learning_rate=5e-5, device='cpu'):
    """Train the BERT-based NLU model."""
    model = model.to(device)

    # Loss functions for both tasks
    intent_loss_fn = nn.CrossEntropyLoss()
    slot_loss_fn = nn.CrossEntropyLoss()

    # Optimizer
    optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)

    # DataLoader
    dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

    for epoch in range(num_epochs):
        model.train()
        for batch in dataloader:
            # Move inputs and labels to device
            input_ids = batch['input_ids'].to(device)
            attention_mask = batch['attention_mask'].to(device)
            intent_labels = batch['intent_labels'].to(device)
            slot_labels = batch['slot_labels'].to(device)

            # Forward pass
            intent_logits, slot_logits = model(input_ids, attention_mask)

            # Compute losses
            intent_loss = intent_loss_fn(intent_logits, intent_labels)
            slot_loss = slot_loss_fn(
                slot_logits.view(-1, slot_logits.size(-1)),
                slot_labels.view(-1)
            )

            # Combined loss
            loss = intent_loss + slot_loss

            # Backward pass
            loss.backward()
            optimizer.step()
            optimizer.zero_grad()

        print(f"Epoch {epoch + 1}, Loss: {loss.item():.4f}")

    return model
\`\`\`

### Important Notes
- The intent and slot classifier is part of the \`social-interaction-cloud\` Python package
- After making changes, reinstall via \`pip install .\`
- Model checkpoint (\`model_checkpoint.pt\`) must be in the \`nlu.utils.checkpoints\` folder
- All team members need the same checkpoint file

---

## HTML and Bootstrap

### Web Interface for the Agent
The conversational agent includes a **web interface** (accessible at \`http://localhost:8080/start.html\`) that provides:
- Visual recipe display
- Microphone button for speech input
- Real-time transcription feedback
- Recipe filtering visualization
- Conversation history

### Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Recommendation Agent</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet">
    <style>
        .chat-container { max-height: 400px; overflow-y: auto; }
        .user-message { background-color: #e3f2fd; }
        .agent-message { background-color: #f5f5f5; }
    </style>
</head>
<body>
    <div class="container mt-4">
        <h1 class="text-center">Recipe Agent</h1>

        <!-- Chat Area -->
        <div class="card">
            <div class="card-body chat-container" id="chatArea">
                <!-- Messages appear here -->
            </div>
        </div>

        <!-- Microphone Button -->
        <div class="text-center mt-3">
            <button class="btn btn-primary btn-lg rounded-circle"
                    id="micButton" onclick="toggleMic()">
                <i class="bi bi-mic-fill"></i>
            </button>
        </div>

        <!-- Recipe Display -->
        <div class="row mt-4" id="recipeCards">
            <!-- Recipe cards rendered dynamically -->
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
    </script>
</body>
</html>
\`\`\`

### Bootstrap Components Used
- **Cards**: Display recipe information
- **Grid System**: Responsive layout (\`row\`, \`col-md-4\`)
- **Buttons**: Microphone control, navigation
- **Modals**: Recipe details, confirmation dialogs
- **Alerts**: Error messages, status updates
- **Badges**: Tags for cuisine, meal type
- **Progress bars**: Loading indicators

### Dynamic Content with JavaScript

\`\`\`html
<script>
function addMessage(text, sender) {
    const chatArea = document.getElementById('chatArea');
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user'
        ? 'p-2 mb-2 user-message rounded'
        : 'p-2 mb-2 agent-message rounded';
    msgDiv.textContent = text;
    chatArea.appendChild(msgDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function displayRecipe(recipe) {
    const container = document.getElementById('recipeCards');
    container.innerHTML += \`
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">\\\${recipe.name}</h5>
                    <p class="card-text">
                        <span class="badge bg-primary">\\\${recipe.cuisine}</span>
                        <span class="badge bg-secondary">\\\${recipe.duration}</span>
                    </p>
                </div>
            </div>
        </div>
    \`;
}
</script>
\`\`\`

### Visual Aspects of the Agent
The web interface is an important part of the agent evaluation. Good visual design includes:
- Clear indication of agent state (listening, processing, responding)
- Recipe cards with relevant information
- Filter visualization showing active constraints
- Responsive design for different screen sizes

---

## Prolog for Dialogue Management

### MARBEL Agent
The dialogue manager is implemented as a **MARBEL agent** -- a multi-agent system platform that uses Prolog for knowledge representation and reasoning.

### Basic Prolog Syntax

\`\`\`prolog
% Facts
ingredient(garlic).
ingredient(pasta).
cuisine(italian).
cuisine(japanese).

% Rules
is_recipe(Name) :- recipe(Name, _, _).
has_ingredient(Recipe, Ingredient) :-
    recipe(Recipe, Ingredients, _),
    member(Ingredient, Ingredients).

% Lists
% [Head | Tail] pattern matching
first_element([H | _], H).
rest_of_list([_ | T], T).

% Append
my_append([], L, L).
my_append([H|T1], L2, [H|T3]) :- my_append(T1, L2, T3).

% Member
my_member(X, [X | _]).
my_member(X, [_ | T]) :- my_member(X, T).
\`\`\`

### SUPPLE Dialog Management
The dialog manager follows the **SUPPLE** approach with these core components:

1. **Session Updating**: Track conversation state
2. **Conversational Memory**: Store parameter-value pairs
3. **Patterns**: Define expected conversation flows
4. **Agenda**: High-level conversation structure

### Conversational Memory

\`\`\`prolog
% Memory stores parameter-value pairs
% e.g., [ingredient=pasta, ingredient=garlic, button=start]

% Update memory with new parameters (overwrite semantics)
updateMemory(NewParams, OldMemory, NewMemory) :-
    memory(OldMemory),
    removeEmptyParams(NewParams, Params),
    setof(Key, V^member(Key=V, Params), Keys),
    remove(Keys, OldMemory, CleanedParams),
    append(Params, CleanedParams, NewMemory).

% Remove parameters with keys that will be overwritten
remove([], Memory, Memory).
remove([Key | Rest], OldMemory, CleanedMemory) :-
    exclude(has_key(Key), OldMemory, TempMemory),
    remove(Rest, TempMemory, CleanedMemory).

has_key(Key, Key=_).
\`\`\`

### Conversational Patterns
Patterns define expected sequences of dialogue moves as adjacency pairs:

\`\`\`prolog
% Pattern definition
% pattern([PatternId, [actor, intent], [actor, intent], ...])

% Greeting pattern
pattern([c10,
    [agent, greeting],
    [agent, selfIdentification],
    [user, greeting]
]).

% Recipe selection pattern
pattern([a50recipeSelect,
    [agent, specifyGoal],
    [user, recipeRequest],
    [agent, recipeChoiceReceipt],
    [user, recipeConfirm],
    [agent, recipeConfirmReceipt]
]).

% Feature request subpattern
pattern([a21featureRequest,
    [user, addFilter],
    [agent, removeConflicts],
    [agent, ackFilter]
]).

% Session closer pattern
pattern([c40,
    [agent, sessionCloser],
    [agent, farewell]
]).
\`\`\`

### Session Predicate
The session tracks the current state of the conversation:

\`\`\`prolog
% session([H | T])
% H = current ongoing conversation (active pattern with nested subpatterns)
% T = list of finished conversation parts

% Example session state:
session([
    [a50recipeSelect, [agent, specifyGoal, []],
        [a21featureRequest, [user, addFilter, [ingredient=garlic]],
            [agent, removeConflicts([ingredient=garlic]), []],
            [agent, ackFilter, []]
        ],
        [user, recipeRequest],
        [agent, recipeChoiceReceipt]
    ],
    [c10, [agent, greeting, []], [agent, selfIdentification, []], [user, greeting, []]],
    [start, [user, button, [button='Start']]]
]).
\`\`\`

### Session Update Cases
The dialog manager updates the session in 4 cases:

**Case 1 - New Sequence**: Start a new top-level pattern when a matching pattern begins with the current [Actor, Intent].
\`\`\`prolog
% Condition: No current session, intent matches start of a pattern
% matchingPattern(Actor, Intent, PatternId)
% Action: Create new session with the pattern
\`\`\`

**Case 2 - Expected Intent**: The intent matches the next expected move in the current active sequence.
\`\`\`prolog
% Condition: session([H | T]), next expected in H matches [Actor, Intent]
% expectedIntent(H, Actor, Intent, Params, NewH)
% Action: Advance H to NewH, keep T unchanged
\`\`\`

**Case 3 - Matching Subpattern**: The intent matches the start of a different pattern, which gets inserted as a subpattern.
\`\`\`prolog
% Condition: session([H | T]), matchingPattern(Actor, Intent, PatternId)
% add(H, [PatternId], NewH) - insert subpattern into current sequence
% Action: Update H with inserted subpattern, recurse
\`\`\`

**Case 4 - Repair (b13)**: As a last resort, insert the repair pattern (b13) when no other case matches.
\`\`\`prolog
% Condition: None of the above cases matched
% add(H, [b13], NewH) - insert repair pattern
% Action: Trigger repair sequence, then recurse
\`\`\`

### Sequence Completion Check

\`\`\`prolog
% Check whether a sequence completes a pattern
completedPattern([PatternId | Sequence]) :-
    getActorIntentPairs(Sequence, ActorIntentPairs),
    pattern([PatternId | PatternSequence]),
    append(ActorIntentPairs, [], PatternSequence).
\`\`\`

### Reading the Session (from logs)
Session is a nested structure. To read it:
1. **Look for pattern IDs** (c10, a50recipeSelect, c40, etc.)
2. **Identify subpatterns** (a21featureRequest nested inside a50recipeSelect)
3. **Read patterns from end to beginning**, subpatterns from beginning to end
4. Subpatterns are always initiated after their parent pattern has started

### Intent Processing in the Dialog Manager
When a user speaks, the dialog manager processes the intent through these steps:

1. **Stop listening** / receive TextDone event
2. **Check for issues**:
   - No label detected -> \`input.unknown\`
   - Empty parameters -> fallback handling
3. **Preprocess parameters**: Normalize slot values using synonyms
4. **Update conversational memory**: Store new parameter-value pairs
5. **Update session**: Apply one of the 4 session update cases

### Responses (NLG)
Responses are defined in \`responses.pl\` using the \`text/2\` predicate:

\`\`\`prolog
% Pattern specifies dialog moves (intents), NOT natural language
% responses.pl maps intents to text

text(greeting, "Hello! Welcome to the recipe recommendation agent.").
text(greeting, "Hi there! Ready to find a recipe?").
text(selfIdentification, "I am your cooking assistant.").
text(specifyGoal, "What kind of recipe are you looking for?").
text(ackFilter, "Got it, I will filter for that.").
text(farewell, "Goodbye! Enjoy your cooking!").

% Grice's Maxim of Quantity:
% 1. Make your contribution as informative as is required
% 2. Do not make it more informative than required
\`\`\`

### Repair Strategies
When the conversation breaks down:
- **Rapid reprompt**: "Could you say that again, please?"
- **Particular repair prompt**: "How many people did you say?"
- **Escalating detail**: "So you want to book a table for 3 persons?"

**Causes of breakdown**:
- Misunderstanding (intent/entity not recognized)
- Scripted agent flow (too rigid)
- External factors (noise, bad ASR)
- No repair facilitated

**Repair Patterns (Moore & Arar, 2019)**:

Agent-initiated (Pattern B1.2.0 - Paraphrase Request):
\`\`\`
1 A: <ANY UTTERANCE>
2 U: <UNKNOWN UTTERANCE>
3 A: INITIAL PARAPHRASE REQUEST  ("What do you mean?")
4 U: <KNOWN PARAPHRASE>
5 A: <APPROPRIATE RESPONSE>
\`\`\`

User-initiated (Pattern B2.4.0 - Paraphrase Request):
\`\`\`
1 A: <ANY UTTERANCE>
2 U: PARAPHRASE REQUEST  ("What do you mean?")
3 A: PARAPHRASE  (rephrase the previous utterance)
\`\`\`

---

## Evaluation and Testing

### PARADISE Framework
Evaluation follows the **PARADISE** (PARAdigm for DIalogue System Evaluation) framework:

| Dimension | Metric | Description |
|-----------|--------|-------------|
| Task Success | Task completion rate | Did the agent complete the recipe recommendation? |
| Efficiency | Interactional efficiency | Happy flow length / actual number of turns |
| Quality | Response sensibility | Are responses appropriate and natural? |
| User Satisfaction | Likert scale (1-5) | Self-reported user satisfaction survey |

### Interactional Efficiency
\`\`\`
Interactional Efficiency = Happy Flow Length / Actual Number of Turns
\`\`\`
- Rule of thumb: If efficiency < 0.25, there is a problem
- Lower values indicate more repair/deviation from ideal flow

### Navigation Testing
- **Out-of-context**: User says something that matches an intent but is not expected at this point in the conversation -> context mismatch
- **Out-of-domain**: User says something completely outside the agent's capabilities -> fallback intent triggered

### Quality Testing
- **Quantitative**: Frequency of fallback intents, repair triggers
- **Qualitative**: Response sensibility, conversation naturalness
- **Component-level**: ASR accuracy (evaluation.py), NLU precision/recall, DM repair patterns, NLG variety

### Pilot User Study
1. **Preparation**: Define tasks, create instructions, consent forms
2. **Task definition**: Specify what "task completion" means (e.g., selecting a recipe with 0-3 filters)
3. **Conducting**: Get consent, have each participant do 3+ conversations, collect logs
4. **Analysis**: Quantitative (efficiency, robustness) + qualitative (surveys, interviews)

### Robustness Evaluation
- Fallback intents count as misunderstandings
- b13 repair pattern triggers indicate misunderstandings
- Check for incorrectly classified intents
- Use confusion matrices for detailed analysis

### End Report Structure (max 10 pages)
1. **Introduction** (1 page): Main aims
2. **How does your agent work?** (2 pages): Functional specification
3. **Intent and Slot Classifier** (1-2 pages): Performance analysis
4. **Exclusion** (2 pages): Excluding ingredients/cuisines/mealTypes
5. **Extensions to the Pipeline** (1 page): Additional enhancements
6. **Pilot User Study** (1 page): Setup, results, key findings
7. **Conclusion** (1 page): Outcomes, reflections, future work

---

## Common Issues and Fixes

### MARBEL on macOS (libgmp issue)
\`\`\`bash
# Error: SIGBUS(0xa) in libgmp.10.dylib
# Fix: Replace bundled libgmp with Homebrew version

# Step 1: Backup the bundled library
mv "$HOME/Library/Application Support/swilibs/1.0.1-SNAPSHOT/mac/libgmp.10.dylib" \\
   "$HOME/Library/Application Support/swilibs/1.0.1-SNAPSHOT/mac/libgmp.10.dylib.backup"

# Step 2: Symlink the Homebrew version
ln -s /opt/homebrew/opt/gmp/lib/libgmp.10.dylib \\
   "$HOME/Library/Application Support/swilibs/1.0.1-SNAPSHOT/mac/libgmp.10.dylib"
\`\`\`

### PyAudio / PortAudio Issues (macOS)
- **Do NOT use conda** to fix PortAudio -- it breaks the install
- Replace files containing \`import pyaudio\` with \`sounddevice\` alternatives
- Three files need replacement: \`desktop_microphone.py\`, \`desktop_speakers.py\`, \`desktop_text_to_speech.py\`
- Run \`pip install sounddevice\` for the alternative scripts

### Microphone Input Overflow (macOS)
- Error: \`OSError: [Errno -9981] Input overflowed\`
- Symptom: MARBEL shows "empty update" and "going to sleep"
- Related to DesktopMicrophoneSensor crashing -- audio never reaches Dialogflow/NLU

---

## History of Conversational Agents

| Year | Agent | Significance |
|------|-------|-------------|
| 1966 | **ELIZA** | First chatbot (pattern matching) |
| 2011 | **Watson** | Won Jeopardy! |
| 2016 | **Tay** | Microsoft's Twitter bot (learned offensive behavior) |
| 2022 | **ChatGPT** | Large Language Model revolution |
| 2023+ | **LangChain, AutoGen** | Multi-agent frameworks |
`;
