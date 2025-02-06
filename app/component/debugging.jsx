"use client";
import { useState } from "react";

const challenges = [
  {
    title: "Sorting Mystery",
    scenario:
      "A sorting function sometimes produces unexpected results. It's unclear whether the issue lies in element comparison or positioning.",
    buggyCode: `def sort_numbers(arr):\n    for i in range(len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr`,
    fixedCode: `def sort_numbers(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr`,
    explanation:
      "A subtle issue in the loop control was causing unintended behavior, leading to inconsistencies in sorting outcomes.",
  },

];

export default function DebuggingChallenges() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      {challenges.map((challenge, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 shadow-md">
          <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>
          <div className="mt-2">
            <p className="text-gray-700 font-medium">Scenario:</p>
            <p className="mb-2">{challenge.scenario}</p>
            <p className="text-gray-700 font-medium">Buggy Code:</p>
            <pre className="bg-red-100 p-2 rounded text-sm overflow-auto mb-2">
              {challenge.buggyCode}
            </pre>
            <p className="text-gray-700 font-medium">Fixed Code:</p>
            <pre className="bg-green-100 p-2 rounded text-sm overflow-auto mb-2">
              {challenge.fixedCode}
            </pre>
            <p className="text-gray-700 font-medium">Explanation:</p>
            <p>{challenge.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
