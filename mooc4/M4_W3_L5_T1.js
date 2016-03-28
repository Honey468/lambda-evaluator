var starter_path = "M4_W3_L1_T1_starter.xml";
// The id is to act as a course identifier.
// NOTE: FOR NOW YOU ALSO HAVE TO ADD THE ID TO THE BOTTOM OF THE PAGE.
var courseID = "BJC.4x";  // e.g. "BJCx"
// Specify a prerequisite task id, should be null if no such requirement.
var preReqTaskID = null;
var preReqID = courseID + preReqTaskID;
// taskID uniquely identifies the task for saving in browser sessionStorage.
var taskID = "_M4_W3_L5_T1";
var id = courseID + taskID;
var isEDX = isEDXurl();
// if this question is not meant to be graded, change this flag to false
var graded = true;
// to hide feedback for this problem, set this to false
var showFeedback = true;
// to allow ability to regrade certain tests, set this to true
var regradeOn = true;
function AGTest(outputLog) {
    var fb = new FeedbackLog(
        world,
        id,
        'I Hope You Remember Your Calculus'
    );

    var blockName = "min value of % over all numbers in %";

    var spriteIndex;
    var ide = world.children[0];
    var sprites = ide.sprites.contents;
    for (var i = 0; i < sprites.length; i++) {
        if (sprites[i].name === "Minimize Function") {
            spriteIndex = i;
            break;
        }
    }

    var chunk_1 = fb.newChunk('Complete the "' + blockName + '" block.');

    var blockExists_1 = function () {
        return spriteContainsBlock(blockName, spriteIndex);
    }

    var noIteration_1 = function() {
        if (spriteContainsBlock(blockName, spriteIndex)) {
            return (!customBlockContains(blockName, "forever %c", undefined, spriteIndex)) && (!customBlockContains(blockName, "for %upvar = %n to %n %cs", undefined, spriteIndex))
            && (!customBlockContains(blockName, "repeat until %b %c", undefined, spriteIndex)) && (!customBlockContains(blockName, "repeat %n %c", undefined, spriteIndex))
            && (!customBlockContains(blockName, "for each %upvar of %l %cs", undefined, spriteIndex));
        } else {
            return false;
        }
        
    }

    var noRecursion_1 = function() {
        if (spriteContainsBlock(blockName, spriteIndex)) {
           return (!customBlockContains(blockName, blockName, undefined, spriteIndex)); 
        } else {
            return false;
        }
    }


    var tip_1_1 = chunk_1.newTip('Make sure you name your block exactly "' + blockName + '" and place it in the scripting area.',
        'The "' + blockName + '" block exists.');

    tip_1_1.newAssertTest(
        blockExists_1,
        'Testing if the "' + blockName + '" block is in the scripting area.',
        'The "' + blockName + '" block is in the scripting area.',
        'Make sure you name your block exactly "' + blockName + '" and place it in the scripting area.',
        1
    );

    var tip_1_1a = chunk_1.newTip('Make sure you do not use iteration or recursion.',
        'The "' + blockName + '" block does not use iteration or recursion.');

    tip_1_1a.newAssertTest(
        noIteration_1,
        'Testing to make sure the "' + blockName + '" block does not use iteration.',
        'The "' + blockName + '" block does not use iteration.',
        'Make sure your block "' + blockName + '" does not use iteration. Try only using HOFS!',
        1
    );

    tip_1_1a.newAssertTest(
        noRecursion_1,
        'Testing to make sure the "' + blockName + '" block does not use recursion.',
        'The "' + blockName + '" block does not use recursion.',
        'Make sure your block "' + blockName + '" does not use recursion. Try only using HOFS!',
        1
    );


    var tip_1_2 = chunk_1.newTip(
        'Your block should return the correct values for given inputs.',
        'Great job! Your block reports the correct value for given inputs.'
    );

    var input_1_2_1_function = function(n) {
        return n % 5;
    }

    try {
       var input_1_2_1 = [getScript("f %", spriteIndex), [4, 6, 7]];
        tip_1_2.newIOTest('r',  // testClass
            blockName,          // blockSpec
            input_1_2_1,        // input
            function (output) {
                // Output should be a list of 2D lists.
                var expected,
                    actual;

                expected = 1;
                if (output instanceof List) {
                    actual = output.asArray();
                } else {
                    actual = output;
                }
                if (!_.isEqual(actual, expected)) {
                    //tip_1_2.suggestion = 'The output should be ' + expected + ';';
                    //tip_1_2.suggestion += ' but was ' + actual + '.';
                    return false;
                }
                return true;
            },
            4 * 1000, // 4 second time out.
            true, // is isolated
            1 // points
        );

        var input_1_2_2 = [getScript("g %", spriteIndex), [1, 2, 3, 5, 7, 9, 11]];
        tip_1_2.newIOTest('r',  // testClass
            blockName,          // blockSpec
            input_1_2_2,        // input
            function (output) {
                // Output should be a list of 2D lists.
                var expected,
                    actual;

                expected = 11;
                if (output instanceof List) {
                    actual = output.asArray();
                } else {
                    actual = output;
                }
                if (!_.isEqual(actual, expected)) {
                    //tip_1_2.suggestion = 'The output should be ' + expected + ';';
                    //tip_1_2.suggestion += ' but was ' + actual + '.';
                    return false;
                }
                return true;
            },
            4 * 1000, // 4 second time out.
            true, // is isolated
            1 // points
        );

        var input_1_2_3 = [getScript("f %", spriteIndex), []];
        tip_1_2.newIOTest('r',  // testClass
            blockName,          // blockSpec
            input_1_2_3,        // input
            function (output) {
                // Output should be a list of 2D lists.
                var expected,
                    actual;

                expected = "";
                if (output instanceof List) {
                    actual = output.asArray();
                } else {
                    actual = output;
                }
                if (!_.isEqual(actual, expected)) {
                    //tip_1_2.suggestion = 'The output should be ' + expected + ';';
                    //tip_1_2.suggestion += ' but was ' + actual + '.';
                    return false;
                }
                return true;
            },
            4 * 1000, // 4 second time out.
            true, // is isolated
            1 // points
        ); 
    } catch(e) {

        var blockName_2 = "f %";
        var blockName_3 = "g %";

        var blockExists_2 = function () {
            return spriteContainsBlock(blockName_2, spriteIndex);
        }
        var blockExists_3 = function () {
            return spriteContainsBlock(blockName_3, spriteIndex);
        }




        tip_1_2.newAssertTest(
            blockExists_2,
            'Testing if the "' + blockName_2 + '" block is in the scripting area.',
            'The "' + blockName_2 + '" block is in the scripting area.',
            'Make sure the "' + blockName_2 + '" block is in the scripting area. It is necessary for testing of the "min value of % over all numbers in %" block. Since it is found in the starter file, if the starter file did not load, please either load one of your previous exercises from this week or click the "reset" button.',
            1
        ); 

        tip_1_2.newAssertTest(
            blockExists_3,
            'Testing if the "' + blockName_3 + '" block is in the scripting area.',
            'The "' + blockName_3 + '" block is in the scripting area.',
            'Make sure the "' + blockName_3 + '" block is in the scripting area. It is necessary for testing of the "min value of % over all numbers in %" block. Since it is found in the starter file, if the starter file did not load, please either load one of your previous exercises from this week or click the "reset" button.',
            1
        ); 
    }

    



    


    return fb;
    
    }