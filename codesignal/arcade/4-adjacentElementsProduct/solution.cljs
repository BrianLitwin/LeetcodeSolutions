(defn makepairs [vec] 
    (for [i (range (- (count vec) 1))] [(vec i) (vec (+ i 1))])
)

(defn get-sum [pair] (* (first pair) (second pair)))

(defn adjacentElementsProduct [inputArray] 
    (reduce max (vec (map get-sum (makepairs inputArray))))
)

