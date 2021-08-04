#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jul 10 17:14:49 2021

@author: ishitakheria
"""

import tika
from tika import unpack
import heapq
import pyttsx3
import re
import nltk

def doc_preprocessing(file_path):
    text = text_extraction(file_path)
    summary = text_summariser(text["Content"])
    summary2audio(summary)
    
def text_extraction(file_path):
    parsed = unpack.from_file(file_path)
    print("metadata", parsed["metadata"], "Content",parsed["content"])
    return {"metadata" : parsed["metadata"], "Content":parsed["content"] }

def text_summariser(article_text):
    # Removing Square Brackets and Extra Spaces
    article_text = re.sub(r'[[0-9]*]', ' ', article_text)

    # Removing special characters and digits
    formatted_article_text = re.sub('[^a-zA-Z]', ' ', article_text )

    #sentence tokenisation
    sentence_list = nltk.sent_tokenize(article_text)

    #Weighted frequencies of occurrence
    stopwords = nltk.corpus.stopwords.words('english')
    word_frequencies = {}
    for word in nltk.word_tokenize(formatted_article_text):
        if word not in stopwords:
            if word not in word_frequencies.keys():
                word_frequencies[word] = 1
            else:
                word_frequencies[word] += 1
            
    maximum_frequncy = max(word_frequencies.values())
    for word in word_frequencies.keys():
        word_frequencies[word] = (word_frequencies[word]/maximum_frequncy)
    
    sentence_scores = {}
    for sent in sentence_list:
        for word in nltk.word_tokenize(sent.lower()):
            if word in word_frequencies.keys():
                if len(sent.split(' ')) < 30:
                    if sent not in sentence_scores.keys():
                        sentence_scores[sent] = word_frequencies[word]
                    else:
                        sentence_scores[sent] += word_frequencies[word]


    summary_sentences = heapq.nlargest(3, sentence_scores, key=sentence_scores.get)
    summary = ' '.join(summary_sentences)
    summary = re.sub(' +', ' ', summary)
    summary = "".join( summary.splitlines())
    print(summary)
    return summary

def summary2audio(summary):
    engine = pyttsx3.init() # object creation
    #Saving Voice to a file
    engine.save_to_file(summary, 'audio.mp3')
    engine.runAndWait()
    engine.stop()
    
#driver code
doc_preprocessing('Downloads/254_dt_10062021.PDF')