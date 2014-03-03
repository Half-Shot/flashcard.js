flashcard.js
============

A javascript that allows you to make up a load of flashcards for any revision purposes. Much better than the cardbased system. This is built on the great bootstrap from twitter and works fine with PCs and mobile platforms alike.

How to Use
==========

Simply open the file js/cards.json.

A question is structured like so:

'''
{
"question":"QuestionA", #Your question 
"description":"Description of QuestionA", #Additional stuff. Supports HTML
"answer":"42", #The answer
"answerext":"Extended Answer Stuff" #Addition answery stuff
}
'''

The structure of the document is a bit simpler
It goes Object -> Array -> Object.

So you have the section objects and a number of arrays within of sub-sections.
Inside them are your question objects. The javascript will take care of everything else and will
generate the cards on each loadup.

I won't be maintaining this project since my time is spent between my current project, Bread and my Alevels, but your welcome to add your own features and push back ;).
