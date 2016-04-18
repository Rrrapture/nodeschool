#!/usr/bin/env bash
#long silly way to create array in bash
#fruits[0]=Apple
#fruits[1]=Pear
#fruits[2]=Plum
#echo ${fruits[*]} # echo ${fruits[@]} may be used as well

#compound assignments way to create arrays in bash
#fruits=(Apples Pears Plums)
#echo ${fruits[*]}

#fruits=(Orange ${fruits[*]} Banana Cherry)
#echo ${fruits[*]}

#unset fruits[0]
#echo "fruits after unset is now: "${fruits[*]} #appls pears plums banana cherry

#echo "first parameter is " $1
myArray=($1 $2 $3 $4 $5)
#echo "I am " ${myArray[*]}

#slicedArray=${myArray[*]:0:2}

#echo "slicedArray is " ${slicedArray[*]}

#slicedArray=${myArray[*]:1:3}
#echo "I am " ${slicedArray[*]} "and"
slicedArray=(I am ${myArray[*]:1:2} and ${myArray[*]:3:1})
echo ${slicedArray[*]}

