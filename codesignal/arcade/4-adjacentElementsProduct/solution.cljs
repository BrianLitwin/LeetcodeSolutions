(defn makepairs [vec] 
    (for [i (range (- (count vec) 1))] [(vec i) (vec (+ i 1))])
)

(defn get-prod [pair] (* (first pair) (second pair)))

(defn adjacentElementsProduct [inputArray] 
    (reduce max (vec (map get-prod (makepairs inputArray))))
)

